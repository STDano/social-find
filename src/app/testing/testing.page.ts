import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton  } from '@ionic/angular';
import { BlueskyApi } from '../services/bluesky-api';
import { Gemini } from '../services/gemini';
import { Processing } from '../services/processing';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.page.html',
  styleUrls: ['./testing.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, CommonModule, FormsModule]
})
export class TestingPage implements OnInit {
  constructor(
    private blueskyApi: BlueskyApi,
    private gemini: Gemini,
    private processing: Processing
  ) {}

  ngOnInit() {
  }

  async testProfile() {
    try {
      const profile = await this.blueskyApi.getProfile('sphealposting.bsky.social');

      console.log('Profile response:', profile);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  }

  async testPosts() {
    try {
      const posts = await this.blueskyApi.getPosts('sphealposting.bsky.social');

        console.log('Posts response:', posts);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  async testProcessCase() {
    try {
      const result = await this.gemini.processCase('What is the date today?');
      console.log('Process Date response:', result);
    } catch (error) {
      console.error('Error processing date:', error);
    }
  }

  async testCreateCase() {
    try {
      const result = await this.processing.createCase('sphealposting.bsky.social');
      console.log('Create Case response:', result);
    } catch (error) {
      console.error('Error creating case:', error);
    }
  }
}
