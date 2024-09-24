import { Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    { path: 'products', component: ProductListComponent, 
        children: [
            { path: ':id', component: ProductComponent },
        ]
    },
    { path: 'add-product', component: AddProductComponent },
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent}
];
