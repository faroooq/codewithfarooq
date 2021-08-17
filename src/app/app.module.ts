import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { FooterComponent } from './footer/footer.component';
import { FirebaseService } from './services/firebase.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { EnrollFormComponent } from './enroll-form/enroll-form.component';
import { SharedModule } from './shared/shared.module';
import { SocialButtonsComponent } from './social-buttons/social-buttons.component';
import { ContactComponent } from './contact/contact.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { LecturesComponent } from './lectures/lectures.component';
import { SafePipe } from './shared/pipe/safe.pipe';
import { AboutComponent } from './about/about.component';
import { CourseComponent } from './course/course.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CoursesComponent,
    FooterComponent,
    EnrollFormComponent,
    SocialButtonsComponent,
    ContactComponent,
    AboutMeComponent,
    LecturesComponent,
    SafePipe,
    AboutComponent,
    CourseComponent,
    SignInComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    VerifyEmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    SharedModule,
  ],
  providers: [FirebaseService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
