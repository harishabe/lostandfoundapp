import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material';

import { FoundItemComponent } from './../found-item/found-item.component';

const routes: Routes = [
    {
        path: '',
        component: FoundItemComponent
    }
];


@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [FoundItemComponent]
})
export class FoundItemModule { }
