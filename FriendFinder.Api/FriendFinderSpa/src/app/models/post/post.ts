export class Post {
  Id: number;
  text: string;
  createdByUserName: string;
  createdByUserPhoto: string;
  imageUrl: string;
  videoUrl: string;
  createdDate: Date;
  postType: number;
  comments: any = []
}
