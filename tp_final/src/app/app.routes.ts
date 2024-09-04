import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: 'products', component: ProductListComponent, 
        children: [
            { path: ':id', component: ProductComponent },
        ]
    },
    { path: 'contact', component: ContactComponent },
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent}
];
