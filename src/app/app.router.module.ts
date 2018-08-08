import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFound404Component } from './not-found404/not-found404.component';
import { WebsiteViewComponent } from './frontend/website-view/website-view.component';
const routes: Routes = [
    { path: 'admin', loadChildren: './admin/admin-login/admin-login.module#AdminLoginModule'},
    { path: '', component: WebsiteViewComponent },
    { path: '**', component: NotFound404Component }
];
@NgModule({
    declarations: [NotFound404Component, WebsiteViewComponent],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule, NotFound404Component, WebsiteViewComponent]
})
export class AppRouterModule {}
