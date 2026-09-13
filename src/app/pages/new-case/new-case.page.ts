import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Processing } from 'src/app/services/processing.service';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonDatetime 
} from '@ionic/angular';

@Component({
  selector: 'app-new-case',
  templateUrl: './new-case.page.html',
  styleUrls: ['./new-case.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormBuilder,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonDatetime,
    Validators
  ]
})
export class NewCasePage implements OnInit {
  caseForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.caseForm = this.formBuilder.group({
      handle: [''],
      name: [''],
      lastLocated: [''],
      date: ['']
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.caseForm.valid) {
      const formData = this.caseForm.value;
      console.log('Form Data:', formData);
    }

    const formData = this.caseForm.value;
    console.log('Form Data:', formData);
  }
}
