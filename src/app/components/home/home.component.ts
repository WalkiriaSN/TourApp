import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  photo: String = "https://assets.justenergy.com/wp-content/uploads/2021/10/moving-to-alberta-canada-guide-and-faqs-image-of-lake.jpg";
  constructor() { }

}
