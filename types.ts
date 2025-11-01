export enum Page {
  Home = 'Home',
  About = 'About',
  Instructors = 'Instructors',
  Schedule = 'Schedule',
  Admission = 'Admission'
}

export interface Instructor {
  name: string;
  rank: string;
  bio: string;
  imageUrl: string;
}

export interface ClassSchedule {
  day: string;
  classes: {
    time: string;
    level: string;
    ageGroup: string;
  }[];
}

export interface AdmissionFormData {
  studentName: string;
  dateOfBirth: string;
  gender: string;
  email: string;
  phone: string;
  address: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  trainingType: 'in-person' | 'online' | '';
  program: string;
  previousExperience: string;
  agreedToTerms: boolean;
}