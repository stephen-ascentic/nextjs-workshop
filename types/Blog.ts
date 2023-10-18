export interface Blog {
  id: string;
  title: string;
  miniDescription: string;
  description: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  author: {
    id: string;
    name: string;
    profilePictureUrl: string;
    introduction: string;
  };
  tags: string[];
}
