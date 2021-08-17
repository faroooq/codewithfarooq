import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { EnrollFormComponent } from './enroll-form/enroll-form.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { LecturesComponent } from './lectures/lectures.component';
import { AuthGuard } from './services/auth.guard';
import { SeoGuard } from './shared/seo-service/seo.guard';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

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
    path: 'course/:courseId',
    component: LecturesComponent,
    canActivate: [SeoGuard, AuthGuard],
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
  {
    path: 'login',
    component: SignInComponent,
    canActivate: [AuthGuard],
    data: {
      title: ['codewithfarooq'],
      desc: 'The best way to learn technology is Code... Join with me and develop your coding skills.',
      keywords:
        'Technologies, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [AuthGuard],
    data: {
      title: ['codewithfarooq'],
      desc: 'The best way to learn technology is Code... Join with me and develop your coding skills.',
      keywords:
        'Technologies, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'forgot',
    component: ForgetPasswordComponent,
    canActivate: [AuthGuard],
    data: {
      title: ['codewithfarooq'],
      desc: 'The best way to learn technology is Code... Join with me and develop your coding skills.',
      keywords:
        'Technologies, Software, Training, Solutions, Web, Courses, Projects, Coding',
    },
  },
  {
    path: 'email-verify',
    component: VerifyEmailComponent,
    canActivate: [AuthGuard],
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
