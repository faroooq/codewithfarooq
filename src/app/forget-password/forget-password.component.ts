import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css'],
})
export class ForgetPasswordComponent implements OnInit {
  enrollMsg: string =
    'Thank you for contacting us. We will get back to you soon..';
  inquiryForm = this.formBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(
    private formBuilder: FormBuilder,
    public authService: AuthService,
    public router: Router
  ) {}

  ngOnInit() {}

  onSubmit(formData) {
    if (this.inquiryForm.valid) {
      const _v = this.inquiryForm.value;
      this.authService.ForgotPassword(_v.email);
    }
  }

  resetFields() {
    this.inquiryForm = this.formBuilder.group({
      email: new FormControl('', Validators.required),
    });
  }
}
