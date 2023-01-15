import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-forms',
  templateUrl: './contact-forms.component.html',
  styleUrls: ['./contact-forms.component.css']
})
export class ContactFormsComponent implements OnInit {

  Name!: string
  Email!: string
  Message!: string


  ngOnInit(): void {
  }

  SubmitForm() {
    console.log(" mon nom est "+this.Name+" mon email est "+this.Email+" et mon message est le suivant "+this.Message);
    this.Name=''
    this.Email=''
    this.Message=''
  }

}
