import {AttemptLogin} from "./AttemptLogin"
import {createHmac} from "crypto"

export class AuthService {
    public readonly attempLogin = new AttemptLogin();

    static hashPassword(password: string): string {
        return createHmac("sha256", "sdohfjhsdofppioqweipqw89789713/1-23/").update(password).digest("base64");
    }
}