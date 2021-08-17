import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
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
    public authService: AuthService
  ) {}

  ngOnInit() {}

  onSubmit(value) {
    if (this.inquiryForm.valid) {
      const _v = this.inquiryForm.value;
      const form = new FormData();
      form.append('email', _v.email);
      form.append('password', _v.password);
      // Submit your form to app call
      this.firebaseService.contactForm(value).then((res) => {
        this.resetFields();
      });
    }
  }

  resetFields() {
    this.formSubmitted = true;
    this.inquiryForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }
}
