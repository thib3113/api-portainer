import jwt from 'jsonwebtoken';

export default class JWTToken {
    public get isValid(): boolean {
        return this.expirationDate >= new Date();
    }

    public toString(): string {
        return this.token;
    }

    public constructor(token: string) {
        this.token = token;

        this.expirationDate = new Date((jwt.decode(token) as { exp: number }).exp * 1000);
    }

    public expirationDate: Date;
    public token: string;
}
