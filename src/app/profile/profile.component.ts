import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  coursesList: Array<any>;
  formSubmitted: boolean = false;
  enrollMsg: string =
    'Thank you for contacting us. We will get back to you soon..';
  inquiryForm = this.formBuilder.group({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirm_password: new FormControl('', [Validators.required]),
    policy: new FormControl('', [Validators.required]),
    promotional: new FormControl(''),
  });
  constructor(
    private formBuilder: FormBuilder,
    public firebaseService: FirebaseService,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit() {}

  onSubmit(value) {
    if (this.inquiryForm.valid) {
      const _v = this.inquiryForm.value;
      if (_v.password === _v.confirm_password) {
        this.authService
          .SignUp(
            _v.email,
            _v.password,
            _v.first_name,
            _v.last_name,
            _v.promotional
          )
          .then((result) => {
            this.enrollMsg = 'Thank you for Signing Up. Happy Learning!';
            this.router.navigate(['courses']);
          })
          .catch((error) => {
            console.log('Something went wrong');
          });
      } else {
        window.alert('Your password and retype password does not match!');
      }
    }
  }

  resetFields() {
    this.formSubmitted = true;
    this.inquiryForm = this.formBuilder.group({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirm_password: new FormControl('', Validators.required),
      policy: new FormControl('', Validators.required),
      promotional: new FormControl(''),
    });
  }
}
