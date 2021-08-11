import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-lectures',
  templateUrl: './lectures.component.html',
  styleUrls: ['./lectures.component.css'],
})
export class LecturesComponent implements OnInit {
  coursesDetails: any;
  youtubeUrl: string;

  constructor(public firebaseService: FirebaseService) {}

  ngOnInit(): void {
    this.youtubeUrl = 'https://www.youtube.com/embed/fUFyIFyRSAg';
    this.getCoursesDetails('1001');
  }

  getCoursesDetails(courseId) {
    this.firebaseService.getCoursesDetails(courseId).subscribe((result) => {
      this.coursesDetails = result;
    });
  }

  onClick(youtubeUrl) {
    this.youtubeUrl = youtubeUrl;
  }
}
