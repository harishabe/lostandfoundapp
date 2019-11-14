import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material';

import { LostItemComponent } from './../lost-item/lost-item.component';

const routes: Routes = [
    {
        path: '',
        component: LostItemComponent
    }
];


@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [LostItemComponent]
})
export class LostItemModule { }
