import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ApiModule, Configuration, ConfigurationParameters } from 'flotiq';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { environment } from '../environments/environment';
import { EntriesModule } from './entries/entries.module';



export function apiConfigFactory(): Configuration {
    const params: ConfigurationParameters = {
        apiKeys: {'X-AUTH-TOKEN': environment.apiKey}
    };
    return new Configuration(params);
}

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ApiModule.forRoot(apiConfigFactory),
        HttpClientModule,
        EntriesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
