import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuizcardsComponent} from './quizcards/quizcards.component';

const routes: Routes = [
  {path: '', component: QuizcardsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
