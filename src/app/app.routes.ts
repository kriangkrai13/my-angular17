import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { NewsComponent } from './news/news.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'product', component: ProductComponent },
    { path: 'about', component: AboutComponent },
    { path : 'news', component: NewsComponent },
];

