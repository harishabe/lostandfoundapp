import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material';

import { ReportItemComponent } from './../report-item/report-item.component';

const routes: Routes = [
    {
        path: '',
        component: ReportItemComponent
    }
];


@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [ReportItemComponent]
})
export class ReportItemModule { }
