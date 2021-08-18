import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  coursesList: Array<any>;
  formSubmitted: boolean = false;
  enrollMsg: string =
    'Thank you for contacting us. We will get back to you soon..';
  inquiryForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(
    private formBuilder: FormBuilder,
    public firebaseService: FirebaseService,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit() {}

  onSubmit(formData) {
    if (this.inquiryForm.valid) {
      const _v = this.inquiryForm.value;
      this.authService.SignIn(_v.email, _v.password);
    }
  }

  resetFields() {
    this.formSubmitted = true;
    this.inquiryForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  forgotPassword() {
    this.router.navigateByUrl('forgot');
  }
}
