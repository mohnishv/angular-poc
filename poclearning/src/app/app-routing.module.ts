import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimepickerComponent } from './timepicker/timepicker.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'time' },
  { path: 'time', component:TimepickerComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
