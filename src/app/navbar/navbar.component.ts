import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  items: Array<any>;
  name_filtered_items: Array<any>;
  searchValue: string = "";
  constructor(public firebaseService: FirebaseService) { }

  ngOnInit(): void {
  }

}
