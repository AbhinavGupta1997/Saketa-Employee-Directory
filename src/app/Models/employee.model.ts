export class Employee {
    public id: string;
    public firstName: string;
    public lastName: string;
    public preferredName: string;
    public email: string;
    public jobTitle: string;
    public office: string;
    public department: string;
    public phoneNumber: string;
    public skypeId: string;

    constructor(args: any) {
        this.id = args.id;
        this.firstName = args.firstName;
        this.lastName = args.lastName;
        this.preferredName = args.preferredName;
        this.email = args.email;
        this.jobTitle = args.jobTitle;
        this.office = args.office;
        this.department = args.department;
        this.phoneNumber = args.phoneNumber;
        this.skypeId = args.skypeId;
    }
}