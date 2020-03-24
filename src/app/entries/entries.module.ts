import { NgModule } from '@angular/core';
import { EntriesComponent } from './entries.component';
import { EntriesListComponent } from './entries-list/entries-list.component';
import { EntryComponent } from './entries-list/entry/entry.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';
import { EntryEditComponent } from './entry-edit/entry-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EntriesRoutingModule } from './entries-routing.module';
import { Shorten } from '../pipes/shorten.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
    declarations: [
        EntriesComponent,
        EntriesListComponent,
        EntryComponent,
        EntryDetailsComponent,
        EntryEditComponent,
        Shorten
    ],
    imports: [
        ReactiveFormsModule,
        CommonModule,
        EntriesRoutingModule,
        FontAwesomeModule,
    ],
    exports: []
})
export class EntriesModule {}
