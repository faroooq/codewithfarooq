import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { EnrollFormComponent } from './enroll-form/enroll-form.component';
import { HomeComponent } from './home/home.component';
import { LecturesComponent } from './lectures/lectures.component';
import { SeoGuard } from './shared/seo-service/seo.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['codewithfarooq'],
      desc: 'The best way to learn technology is Code... Join with me and develop your coding skills.',
      keywords:
        'Technologies, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'about',
    component: AboutMeComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['codewithfarooq'],
      desc: 'The best way to learn technology is Code... Join with me and develop your coding skills.',
      keywords:
        'Technologies, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'courses',
    component: CourseComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['codewithfarooq'],
      desc: 'The best way to learn technology is Code... Join with me and develop your coding skills.',
      keywords:
        'Technologies, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'enroll',
    component: EnrollFormComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['codewithfarooq'],
      desc: 'The best way to learn technology is Code... Join with me and develop your coding skills.',
      keywords:
        'Technologies, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'listen',
    component: LecturesComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['codewithfarooq'],
      desc: 'The best way to learn technology is Code... Join with me and develop your coding skills.',
      keywords:
        'Technologies, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'about',
    component: AboutMeComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['codewithfarooq'],
      desc: 'The best way to learn technology is Code... Join with me and develop your coding skills.',
      keywords:
        'Technologies, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'contact',
    component: ContactComponent,
    canActivate: [SeoGuard],
    data: {
      title: ['codewithfarooq'],
      desc: 'The best way to learn technology is Code... Join with me and develop your coding skills.',
      keywords:
        'Technologies, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
