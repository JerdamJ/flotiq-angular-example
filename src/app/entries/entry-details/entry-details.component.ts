import { Component, OnInit } from '@angular/core';
import { Todolist } from 'flotiq';
import { FlotiqService } from 'src/app/services/flotiq.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-entry-details',
    templateUrl: './entry-details.component.html',
    styleUrls: ['./entry-details.component.css', '../../shared/styles/loader.css']
})
export class EntryDetailsComponent implements OnInit {

    entry: Todolist;
    id: string;
    faSpinner = faSpinner;
    loading = false;
    processing = false;

    constructor(
        private flotiqService: FlotiqService,
        private activatedRoute: ActivatedRoute,
        private router: Router
    ) {}

  ngOnInit() {
      this.activatedRoute.params.subscribe((params: Params) => {
            this.loading = true;
            this.id = params.id;
            this.flotiqService.getEntry(this.id).subscribe((response) => {
                this.loading = false;
                this.entry = response;
          }, error => {
                this.loading = false;
          });
      });
  }

  editEntry() {
      this.router.navigate(['edit'], {relativeTo: this.activatedRoute});
  }

  deleteEntry() {
      this.processing = true;
      this.flotiqService.deleteEntry(this.id).subscribe((response) => {
            this.processing = false;
            this.router.navigate(['entries']);
            this.flotiqService.elementRemoved.next(this.id);
      }, error => {
          this.processing = false;
      });

  }

}
