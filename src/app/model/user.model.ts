export class User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  disabled = true;
  phoneNumber: string | null;
  providerId: string;
  emailVerified: boolean;

  constructor(params: User) {
    Object.assign(this, params);
  }
}
