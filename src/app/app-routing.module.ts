import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'calendar',
    loadChildren: () =>
      import('./pages/layout.module').then(m => m.LayoutModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'calendar'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
