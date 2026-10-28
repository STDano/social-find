import { Service, inject } from '@angular/core';
import { BlueskyApi } from './bluesky-api';
import { Gemini } from './gemini';

@Service()
export class Processing {
 
  private socialMediaInterface = inject(BlueskyApi);
  private blueskyApi = inject(BlueskyApi);
  private gemini = inject(Gemini);

    async createCase(handle: string) {

        const profile = await this.socialMediaInterface.getProfile(handle);

        const posts = await this.socialMediaInterface.getPosts(handle);

        const mentions = await this.blueskyApi.extractMentions(posts);

        const images = await this.blueskyApi.extractImages(posts);

        const prompt = `
            Analyze these social media posts for information
            that may help locate a missing person.

            Identify:
            - locations
            - dates
            - people mentioned
            - descriptions of the person
            - potentially relevant information

            Return the results as JSON.
        `

        // const aiResult = await this.gemini.processCase(posts, prompt);
        
        // return {profile, posts, mentions, images, aiResult};
    }   
}