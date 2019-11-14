import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            { path: '', redirectTo: 'addProduct', pathMatch: 'prefix' },
            { path: 'addProduct', loadChildren: './add-product/add-product.module#AddProductModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'lostItem', loadChildren: './lost-item/lost-item.module#LostItemModule' },
            { path: 'foundItem', loadChildren: './found-item/found-item.module#FoundItemModule' },
            { path: 'messages', loadChildren: './messages/messages.module#MessageModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
