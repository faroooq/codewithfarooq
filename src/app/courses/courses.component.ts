import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { DocumentSnapshot } from '@firebase/firestore-types';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: Array<any>;
  age_filtered_items: Array<any>;
  name_filtered_items: Array<any>;

  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
    this.getCourses()
  }

  getCourses() {
    this.firebaseService.getCourses()
      .subscribe(result => {
        this.courses = result;
        this.age_filtered_items = result;
        this.name_filtered_items = result;
      })
  }

}
