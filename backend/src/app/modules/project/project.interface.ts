export interface IProject {
  title: string;
  description: string;
  image?: string;
  imagePublicId?: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  order: number;
  createdAt: Date;
}


