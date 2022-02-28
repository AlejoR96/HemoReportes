export class User{
    _id?: number;
    email:string;
    password: string;

    constructor(emailUser:string, passwordUser:string){
        this.email = emailUser;
        this.password = passwordUser;
    }
}
