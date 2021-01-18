export class User {
    private id: number
    private token: string
    private name: string
    private email: string
    private username: string

    constructor(id: number, token: string, name: string, email: string, username: string) {
        this.id = id;
        this.token = token;
        this.name = name;
        this.email = email;
        this.username = username;
    }

    getId(): number {
        return this.id;
    }

    getToken(): string {
        return this.token;
    }

    getUsername(): string {
        return this.username;
    }

    getEmail(): string {
        return this.email;
    }

    getName(): string {
        return this.name;
    }
}