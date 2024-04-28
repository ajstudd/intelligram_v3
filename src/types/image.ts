import { ICommentGroup } from '@/components/img-mapper/ImageComment';

export interface IImage {
  image: string;
  commentGroups: ICommentGroup[];
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface SaveImageResponse {
  message: string;
  image: IImage;
}
