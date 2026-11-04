export interface SocialMediaInterface {
  getProfile(handle: string): Promise<any>;
  getProfiles(dids: string[]): Promise<any>;
  getPosts(handle: string): Promise<any[]>;
}

export type CaseProcessingStatus = 'pending' | 'processing' | 'completed' | 'failed';

export interface MissingPersonCase {
  id: string;
  handle: string;
  name: string;
  lastLocated: string;
  dateLastSeen: string;
  status: 'open' | 'closed';
  createdAt: number;
  processingStatus?: CaseProcessingStatus;
  mentions?: any[];
  images?: any[];
  aiResult?: string;
  processingError?: string;
}
