import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductComponent } from './components/product/product.component';
import { DoneComponent } from './components/done/done.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { TermsComponent } from './components/terms/terms.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { CookieComponent } from './components/cookie/cookie.component';
import { TransparencyComponent } from './components/transparency/transparency.component';

export const routes: Routes = [{
    path: '',
    component: HeroComponent
}, {
    path: 'products',
    component: ProductsComponent
}, {
    path: 'product/:id',
    component: ProductComponent
}, {
    path: 'done',
    component: DoneComponent
}, {
    path: 'about',
    component: AboutComponent
}, {
    path: 'contact',
    component: ContactComponent
}, {
    path: 'terms',
    component: TermsComponent
}, {
    path: 'privacy',
    component: PrivacyComponent
}, {
    path: 'cookies',
    component: CookieComponent
}, {
    path: 'transparency',
    component: TransparencyComponent
},{
    path: '**',
    redirectTo: ''
}];
