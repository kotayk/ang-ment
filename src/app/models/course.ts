import {ICourse} from '../interfaces/icourse';

export class Course implements ICourse {
  id: number;
  title: string;
  creationDate: Date;
  durationTime: Number;
  description: string;
}
