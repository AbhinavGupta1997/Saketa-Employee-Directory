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