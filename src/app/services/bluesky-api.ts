import { Service } from '@angular/core';
import { SocialMediaInterface } from '../interfaces/interfaces';

@Service()
export class BlueskyApi implements SocialMediaInterface {
  private apiUrl = 'https://public.api.bsky.app/xrpc/app.bsky.';

  //API calls 👇
  async getPosts(handle: string) {

    const url = `${this.apiUrl}feed.getAuthorFeed?actor=${encodeURIComponent(handle)}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error (
        `Failed to get posts: ${response.status}` // Placeholder for error handling. Might improve
      );
    }

    const data = await response.json();

    return data.feed;
  }

  async getProfile(handle: string) {

    const url = `${this.apiUrl}actor.getProfile?actor=${encodeURIComponent(handle)}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to get profile: ${response.status}` // Placeholder for error handling. Might improve
      );
    }
    return await response.json();
  }

  async getProfiles(dids: string[]) {

    const params = new URLSearchParams();

    for (const did of dids) {
      params.append('actors', did);
    }

    const url = `${this.apiUrl}actor.getProfiles?${params}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Failed to get profiles: ${response.status}` // Placeholder for error handling. Might improve
      );
    }
    return await response.json();
  } 

  //non-API calls 👇

  //to get mentions
  async extractMentions(posts: any[]) {

    const mentions = [];

    for (const item of posts) {
      const record = item.post.record;

      if (!record.facets) {
        continue;
      }

      for (const facet of record.facets) {
        for (const feature of facet.features) {
          if (feature.$type === 'app.bsky.richtext.facet#mention') {
            mentions.push({
              did: feature.did,
              postUri: item.post.uri,
              createdAt: record.createdAt
            });
          }
        }
      }
    }
    return mentions;
  }

  //to get images
  async extractImages(posts: any[]) {

    const images = [];

    for (const item of posts) {
      const embed = item.post.embed;

      if (!embed) {
        continue;
      }

      if (embed.$type === 'app.bsky.embed.images#view') {
        for (const image of embed.images) {
          images.push({
            imageUrl: image.fullsize.url,
            postUri: item.post.uri,
            createdAt: item.post.record.createdAt,
            alt: image.alt
          });
        }
      }
    }
    return images;
  }

  //For figuring finding location. Nice to have. Will try to figure out later
  // private extractLocations (posts: any[]) {

  //   const locations: any[] = [];

  //   for (const item of posts) {
  //     const text = item.post.record.text;
  //   }

  //   return locations;
  // }

  // private buildTimeline (posts: any[]) {
    
  //   return posts.map(item => ({
  //     uri: item.post.uri,
  //     text: item.post.record.text,
  //     date: new Date (
  //       item.post.record.createdAt
  //     )
  //   })).sort(
  //     (a, b) => a.date.getTime() - b.date.getTime()
  //   );
  // }
}