import { Service } from '@angular/core';
import { SocialMediaInterface } from '../interfaces/interfaces';
import { BlueskyApi } from './bluesky-api';

@Service()
export class Processing {
 
    //Github test test

    constructor(private socialMediaInterface: SocialMediaInterface, private blueskyApi: BlueskyApi) {}

    async createCase(handle: string) {

        const profile = await this.socialMediaInterface.getProfile(handle);

        const posts = await this.socialMediaInterface.getPosts(handle);

        const mentions = await this.blueskyApi.extractMentions(posts);

        const images = await this.blueskyApi.extractImages(posts);

        return {profile, posts, mentions, images};
    }
}