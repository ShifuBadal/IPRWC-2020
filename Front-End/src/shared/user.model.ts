export class User {
    private id: number
    private name: string
    private email: string
    private username: string
    public role: string

    constructor(id: number, name: string, email: string, username: string, role: string) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.role = role;
    }

}