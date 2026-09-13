export interface SocialMediaInterface {
  getProfile(handle: string): Promise<any>;

  getProfiles(dids: string[]): Promise<any>;

  getPosts(handle: string): Promise<any[]>;
}
