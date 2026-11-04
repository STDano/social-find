import { Component } from '@angular/core';
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
export class NewCasePage {
  caseForm: FormGroup;
  isSubmitting = false;

  constructor(
    private formBuilder: FormBuilder,
    private processing: Processing
  ) {
    this.caseForm = this.formBuilder.group({
      handle: ['', Validators.required],
      name: ['', Validators.required],
      lastLocated: ['', Validators.required],
      dateLastSeen: ['', Validators.required]
    });
  }

  async onSubmit(): Promise<void> {
    if (this.caseForm.invalid || this.isSubmitting) {
      this.caseForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    try {
      const formData = this.caseForm.getRawValue();

      const caseId = await this.processing.createCase({
        handle: formData.handle.trim().replace(/^@/, ''),
        name: formData.name.trim(),
        lastLocated: formData.lastLocated.trim(),
        dateLastSeen: formData.dateLastSeen,
        status: 'open',
        createdAt: Date.now()
      });

      console.log('Case created and processing finished. Case ID:', caseId);
      this.caseForm.reset();
    } catch (error) {
      console.error('Unable to create case:', error);
    } finally {
      this.isSubmitting = false;
    }
  }
}
