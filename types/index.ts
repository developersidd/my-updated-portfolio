type ProjectType = {
  id: string;
  title: string;
  category: string;
  fullSizeImage?: string;
  image: string;
  gallery: string[];
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  github: string;
  live: string;
  challenges?: { title: string; description: string; solution?: string }[]
};

export type { ProjectType };
