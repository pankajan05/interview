import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DataviewerComponent} from './dataviewer/dataviewer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'data', component: DataviewerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
