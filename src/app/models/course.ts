import {ICourse} from '../interfaces/icourse';

export class Course implements ICourse {
  id: number;
  name: string;
  data: string;
  date: string;
  durationTime: string;
  isTopRated: boolean;
  description: string;
}
