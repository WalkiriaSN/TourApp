import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { avoidWord, prohibited } from 'custom-validation';



@Component({
  selector: 'app-tech-ideas',
  templateUrl: './tech-ideas.component.html',
  styleUrls: ['./tech-ideas.component.css']
})
export class TechIdeasComponent {
  techform;

  constructor(private formBuilder: FormBuilder) {
    this.techform = formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3)]],
      age: ["", [Validators.required]],
      email: ["", [Validators.email, Validators.required]],
      username: ["", [Validators.required, Validators.minLength(5), avoidWord, prohibited(/admin/)]],
    });
  }

  onSubmit() {
    console.log(this.techform.value);
    this.techform.reset();
  }

  //Getter method 
  //all methods below return a form control
  get nameFormControl() {
    return this.techform.get('name')!;
  }

  get ageFormControl() {
    return this.techform.get('age')!;
  }

  get emailFormControl() {
    return this.techform.get('email')!;
  }

  get ideaFormControl() {
    return this.techform.get('idea')!;
  }
}

