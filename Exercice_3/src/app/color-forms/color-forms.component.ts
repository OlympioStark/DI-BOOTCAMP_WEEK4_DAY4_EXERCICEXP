import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-color-forms',
  templateUrl: './color-forms.component.html',
  styleUrls: ['./color-forms.component.css']
})
export class ColorFormsComponent implements OnInit{

  form!: FormGroup;
  favoriteColors!: string;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
        favoriteColors: ['', Validators.required]
    });
}

submit() {
  console.log(this.form.value);
  this.favoriteColors = this.form.get('favoriteColors')?.value;
}

}
