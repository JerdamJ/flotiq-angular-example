import { EntriesComponent } from './entries.component';
import { EntryEditComponent } from './entry-edit/entry-edit.component';
import { EntryDetailsComponent } from './entry-details/entry-details.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes = [
    { path: 'entries', component: EntriesComponent,
        children: [
            { path: 'new', component: EntryEditComponent },
            { path: ':id', component: EntryDetailsComponent },
            { path: ':id/edit', component: EntryEditComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EntriesRoutingModule {}
