export interface Expert {
  expertId: string;
  name: string;
  slug: string;
  info: string;
  image?: {
    url: string;
    alt: string;
  };
  description?: string;
}
