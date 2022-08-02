import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimepickerComponent } from './timepicker/timepicker.component';
const routes: Routes = [
  { path: 'time', component:TimepickerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
