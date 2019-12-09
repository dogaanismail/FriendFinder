import { Post } from '../post/post';

export class SignedUser {
    userId: number;
    userName: string;
    coverPhotoUrl: string;
    profilePhotoUrl: string;
    registeredDate: Date;
    userPosts: Post[]
    accessToken: string;
    refreshToken: string;
    expires: number;
}
