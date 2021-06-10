// export class Employee {
//     public EmployeeId: number = 0;
//     public FirstName: string;
//     public LastName: string;
//     public PreferredName: string;
//     public Email: string;
//     public JobTitleId: number;
//     public OfficeId: number;
//     public DepartmentId: number;
//     public PhoneNumber: string;
//     public SkypeId: string;

//     constructor(args: any) {
//         this.FirstName = args.firstName;
//         this.LastName = args.lastName;
//         this.PreferredName = args.preferredName;
//         this.Email = args.email;
//         this.JobTitleId = args.jobTitle;
//         this.OfficeId = args.office;
//         this.DepartmentId = args.department;
//         this.PhoneNumber = args.phoneNumber;
//         this.SkypeId = args.skypeId;
//     }
// }

export class Employee {
    public employeeId: number = 0;
    public firstName: string;
    public lastName: string;
    public preferredName: string;
    public email: string;
    public jobTitleId: number;
    public officeId: number;
    public departmentId: number;
    public phoneNumber: string;
    public skypeId: string;

    constructor(args: any) {
        this.firstName = args.firstName;
        this.lastName = args.lastName;
        this.preferredName = args.preferredName;
        this.email = args.email;
        this.jobTitleId = args.jobTitle;
        this.officeId = args.office;
        this.departmentId = args.department;
        this.phoneNumber = args.phoneNumber;
        this.skypeId = args.skypeId;
    }
}