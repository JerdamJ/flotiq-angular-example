import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { FlotiqService } from 'src/app/services/flotiq.service';
import { Todolist } from 'flotiq';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-entry-edit',
    templateUrl: './entry-edit.component.html',
    styleUrls: ['./entry-edit.component.css', '../../shared/styles/loader.css']
})
export class EntryEditComponent implements OnInit {

    entryForm: FormGroup;
    editMode = false;
    id: string;
    loading = false;
    sending = false;
    faSpinner = faSpinner;


    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private flotiqService: FlotiqService
    ) { }

    ngOnInit() {
        this.activatedRoute.params.subscribe((params: Params) => {
            this.id = params.id;
            this.editMode = params.id != null;
            this.init();
        });
    }

    private init() {
        this.id = this.id ? this.id : 'todolist-' + Math.round(Math.random() * 100000);

        if (this.editMode) {
            this.loading = true;
            this.flotiqService.getEntry(this.id).subscribe((responseEntry: Todolist) => {
                    this.loading = false;
                    this.initForm({
                        id: new FormControl(this.id),
                        title: new FormControl(responseEntry.title),
                        description: new FormControl(responseEntry.description),
                        date: new FormControl(responseEntry.description),
                        status: new FormControl(responseEntry.status)
                    });
                }, error => {
                    this.loading = false;
                    console.log('Error with fetching data');
                });

        } else {
            this.initForm({
                id: new FormControl(this.id, Validators.required),
                title: new FormControl('', Validators.required),
                description: new FormControl(''),
                date: new FormControl(''),
                status: new FormControl('New')
            });
        }
    }

    private initForm(formData) {
        this.entryForm = new FormGroup(formData);
    }

    onSubmit() {
        this.sending = true;
        if (this.editMode) {
            this.flotiqService.updateEntry(this.entryForm.value, this.id).subscribe((response) => {
                this.flotiqService.elementChanged.next(response);
                this.sending = false;
                this.router.navigate(['entries', this.id]);
             }, error => {
                 this.sending = false;
             });
        } else {
            this.flotiqService.addEntry(this.entryForm).subscribe((response) => {
                this.flotiqService.elementAdded.next(response);
                this.router.navigate(['entries', this.id]);
                this.sending = false;
             }, error => {
                 this.sending = false;
             });
        }
    }

    onCancel() {
        if (this.editMode) {
            this.router.navigate(['entries', this.id]);
        } else {
            this.router.navigate(['entries']);
        }
    }
}
