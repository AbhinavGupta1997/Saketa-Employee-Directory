// export interface Employee1 {
//     EmployeeId: number;
//     FirstName: string;
//     LastName: string;
//     PreferredName: string;
//     Email: string;
//     PhoneNumber: string;
//     SkypeId: string;
//     JobTitleId: number;
//     DepartmentId: number;
//     OfficeId: number;

//     // new (FirstName: string, LastName: string, PreferredName: string, Email: string, PhoneNumber: string, SkypeId: string): Employee1
// }

export class Employee1 {
    public EmployeeId: number = 0;
    public FirstName: string;
    public LastName: string;
    public PreferredName: string;
    public Email: string;
    public JobTitleId: number;
    public OfficeId: number;
    public DepartmentId: number;
    public PhoneNumber: string;
    public SkypeId: string;

    constructor(args: any) {
        // this.EmployeeId = args.id;
        this.FirstName = args.firstName;
        this.LastName = args.lastName;
        this.PreferredName = args.preferredName;
        this.Email = args.email;
        this.JobTitleId = args.jobTitle;
        this.OfficeId = args.office;
        this.DepartmentId = args.department;
        this.PhoneNumber = args.phoneNumber;
        this.SkypeId = args.skypeId;
    }
}