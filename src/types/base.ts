export interface UserInterface {
  id?: string;
  email: string;
  password?: string;
  Profile?: ProfileInterface;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ProfileInterface {
  id?: string;
  user?: UserInterface;
  fullName: string;
  userName: string;
  avatarUrl?: string;
  bio?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
