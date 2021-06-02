import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-enroll-form',
  templateUrl: './enroll-form.component.html',
  styleUrls: ['./enroll-form.component.css']
})
export class EnrollFormComponent implements OnInit {

  courses: Array<any>;
  formSubmitted: boolean = false;
  enrollMsg: string = 'Thank you for enrolling the course. We will get back to you soon..';
  inquiryForm = this.formBuilder.group({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    course: new FormControl('', [Validators.required])
  });
  constructor(private formBuilder: FormBuilder, public firebaseService: FirebaseService) { }

  ngOnInit() {
    this.getCourses()
  }

  getCourses() {
    this.firebaseService.getUsers()
      .subscribe(result => {
        this.courses = result;
      })
  }

  onSubmit(value) {
    if (this.inquiryForm.valid) {
      const _v = this.inquiryForm.value;
      const form = new FormData();
      form.append('first_name', _v.first_name);
      form.append('last_name', _v.last_name);
      form.append('email', _v.email);
      form.append('phone', _v.phone);
      form.append('course', _v.course);
      // Submit your form to app call
      this.firebaseService.createUser(value)
        .then(
          res => {
            this.resetFields();
          }
        )
    }
  }

  resetFields() {
    this.formSubmitted = true;
    this.inquiryForm = this.formBuilder.group({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      course: new FormControl('', Validators.required),
    });
  }

}
