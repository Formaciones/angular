export class User {
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    phone: string;
    office: string;
    online: boolean;

    constructor() {
        this.id = 0;
        this.username = "";
        this.password = "";
        this.firstname = "";
        this.lastname = "";
        this.phone = "";
        this.office = "";
        this.online = false;
    }
}

