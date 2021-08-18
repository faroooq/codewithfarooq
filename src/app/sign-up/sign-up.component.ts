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
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  coursesList: Array<any>;
  formSubmitted: boolean = false;
  errorMsg: string;
  signupForm = this.formBuilder.group({
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

  ngOnInit() {
    this.formSubmitted = false;
  }

  onSubmit(value) {
    this.errorMsg = '';
    this.formSubmitted = true;
    if (this.signupForm.valid) {
      const _v = this.signupForm.value;
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
            if (result) {
              this.errorMsg = result;
            } else {
              if (this.errorMsg === '') {
                this.router.navigate(['courses']);
              }
            }
          })
          .catch((error) => {
            this.errorMsg = error.message;
            // console.log(error.code);
          });
      } else {
        this.errorMsg = 'Your password and retype password does not match!';
      }
    }
  }
}
