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

    constructor(id: string, fName: string, lName: string, prefName: string, email: string, jTitle: string,
        office: string, dept: string, pNumber: string, skype: string) {
            this.id = id;
            this.firstName = fName;
            this.lastName = lName;
            this.preferredName = prefName;
            this.email = email;
            this.jobTitle = jTitle;
            this.office = office;
            this.department = dept;
            this.phoneNumber = pNumber;
            this.skypeId = skype;
    }
}