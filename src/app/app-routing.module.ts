import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SeoGuard } from './shared/seo-service/seo.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['codewithfarooq'],
      desc: 'The best way to learn technology is Code... Join with me and develop your coding skills.',
      keywords: 'Technologies, Software, Training, Solutions, Web, Courses, Projects, Coding'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['codewithfarooq'],
      desc: 'The best way to learn technology is Code... Join with me and develop your coding skills.',
      keywords: 'Technologies, Software, Training, Solutions, Web, Courses, Projects, Coding'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
