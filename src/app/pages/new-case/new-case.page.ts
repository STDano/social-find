import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Processing } from '../../services/processing';
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
    CommonModule,
    ReactiveFormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonDatetime
  ]
})
export class NewCasePage implements OnInit {
  caseForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.caseForm = this.formBuilder.group({
      handle: [''],
      name: [''],
      lastLocated: [''],
      dateLastSeen: ['']
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
