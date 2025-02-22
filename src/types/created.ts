export type UserCreateType = {
  email: string;
  password: string;

  Profile: {
    fullName: string;
    userName: string;
    avatarUrl?: string | null;
    bio?: string | null;
  };
};
