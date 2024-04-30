export interface IImage {
  image: string;
  localPath: string;
  _id?: string;
}

export interface IComment {
  ownerId: string;
  postid: string;
  content: string;
  images: string[];
  _id?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICreatePostData {
  title: string;
  content: string;
  password: string;
  isLocked: boolean;
  visibleTo: IMention[];
  images: File[];
}

interface PostDocument {
    _id: string;
    comments: any[];
    content: string;
    isLocked: boolean;
    title: string;
    images: any[];
    ownerId: string;
    visibleTo: any[];
    createdAt: string;
    updatedAt: string;
    __v: number;
    id: string;
}

export interface PostResponse {
    posts: PostDocument[];
}

export interface IPostComment {
  id?: string;
  ownerId: string;
  content: string;
  createdAt?: Date;
}

export interface IMention {
  userId: string ;
  name: string;
}

export interface IPost {
  _id: string;
  id: string;
  ownerId: string ;
  title: string;
  content: string;
  password: string;
  isLocked: boolean;
  visibleTo: IMention[];
  images: IImage[];
  comments: IPostComment[] | [];
}