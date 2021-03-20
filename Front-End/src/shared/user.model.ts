export class User {
    private name: string;
    private email: string;
    private username: string;
    public role: string;

    constructor(name: string, email: string, username: string, role: string) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.role = role;
    }

}
