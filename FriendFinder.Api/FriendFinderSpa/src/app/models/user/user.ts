import { Post } from '../post/post';

export class User {
    id: number;
    userName: string;
    coverPhotoUrl: string;
    profilePhotoUrl: string;
    registeredDate: Date;
    userPost: Post[]
}
