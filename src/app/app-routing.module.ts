import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SeoGuard } from './shared/seo-service/seo.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['codewithfarooq'],
      desc: 'Stop Listening, Start Coding, The best way to learn technology is to Code... Join with me and develop your coding skills.',
      keywords: 'Technologies, Software, Training, Solutions, Web, Courses, Projects, Coding'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
