export interface User {
    id: number;
    firstname: string;
    lastname: string;
    emailId: string;
    password: string;
    gender: string;
    dateOfBirth: Date;
    role: 'admin' | 'customer';
}
