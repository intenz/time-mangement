import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudyComponent } from './study/study.component';
import { WorkComponent } from './work/work.component';


const routes: Routes = [
  { path: 'study', component: StudyComponent },
  { path: 'work', component: WorkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
