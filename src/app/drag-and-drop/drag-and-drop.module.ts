import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';

import { DragAndDropComponent } from './drag-and-drop.component';
import { DragAndDropRoutingModule } from './drag-and-drop-routing.module';
import { DragElementComponent } from './drag-element/drag-element.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [
        DragAndDropComponent,
        DragElementComponent
    ],
    imports: [
        CommonModule,
        DragDropModule,
        DragAndDropRoutingModule,
        FontAwesomeModule
    ],
    exports: []
})
export class DragAndDropModule {}
