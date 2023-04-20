export class LoginParam {
    Username!: string;
    Password!: string;
}


export class User {
    id!: string;
    username!: string;
    password!: string;
    token!: string;
    succeeded!: string;
    Succeeded!: any;
    Errors!: any;
    data: any;
}