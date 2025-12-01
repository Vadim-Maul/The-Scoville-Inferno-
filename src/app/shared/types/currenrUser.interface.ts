export interface ICurrentUser {
  email: string;
  username: string;
  access_token: string | null;
  refresh_token: string | null;
}
