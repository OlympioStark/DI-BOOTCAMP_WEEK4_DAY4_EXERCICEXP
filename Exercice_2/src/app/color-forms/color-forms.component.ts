import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-forms',
  templateUrl: './color-forms.component.html',
  styleUrls: ['./color-forms.component.css']
})
export class ColorFormsComponent implements OnInit {

  favoriteColor!: string;
  displayColor!: string;

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.favoriteColor);
    this.displayColor = this.favoriteColor;
  }

}
