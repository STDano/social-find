export interface SocialMediaInterface {
  getProfile(handle: string): Promise<any>;

  getProfiles(dids: string[]): Promise<any>;

  getPosts(handle: string): Promise<any[]>;
}

export interface MissingPersonCase {
  id: string;
  
  handle: string;

  name: string;

  lastLocated: string;

  dateLastSeen: string;

  status: 'open' | 'closed';

  createdAt: number;
}
