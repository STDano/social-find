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

        return {profile, posts, mentions, images};
    }

    
}