export class User {
  firstName: string;
  lastName: string;
  email: string;

  constructor(firstName: string, lastName: string, email: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  isEmail(incomingEmail: string): boolean {
    return incomingEmail === this.email;
  }

}
