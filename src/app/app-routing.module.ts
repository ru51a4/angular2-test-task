import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentLayoutComponent } from './layouts/content-layout/content-layout.component';
import { GetkeyfromlsGuard } from './core/guard/getkeyfromls.guard';


const routes: Routes = [{
  path: '',
  component: ContentLayoutComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
      canActivate: [GetkeyfromlsGuard]
    }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
