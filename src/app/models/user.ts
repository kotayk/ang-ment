import {IUser} from '../interfaces/iuser';

export class User implements IUser {
  id: number;
  firstName: string;
  lastName: string;
}
