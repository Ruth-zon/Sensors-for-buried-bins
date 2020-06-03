export enum Job {
    Manager, MunicipalityWorker, TruckWorker
}
export class User {
    Id: string;
    LastName: string;
    FirstName: string;
    Password: number;
    Job: Job;
    Phone: string;
    Area: string;
}