import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../../material';

import { MessagesComponent } from './../messages/messages.component';

const routes: Routes = [
    {
        path: '',
        component: MessagesComponent
    }
];


@NgModule({
    imports: [CommonModule, MaterialModule, RouterModule.forChild(routes)],
    declarations: [MessagesComponent]
})
export class MessageModule { }
