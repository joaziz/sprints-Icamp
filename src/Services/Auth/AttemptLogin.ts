import {User, UsersRepository} from "../../Data/Repositories/UsersRepository";
import {AuthService} from "./AuthService";
import {TokensRepository} from "../../Data/Repositories/TokensRepository";

export class AttemptLogin {
    private readonly UsersRepository = new UsersRepository();
    private readonly tokenRepo = new TokensRepository();
    private status: boolean = false;
    private user: User | null = null;

    async login(username: string, password: string) {

        this.user = await this.UsersRepository.getUserByUsername(username);
        this.status = AuthService.hashPassword(password) == this.user?.getPassword()
        return this
    }

    isValid() {
        return this.status;
    }

    async getToken() {
        if (!this.user)
            throw new Error("no user found to set token");


        let buff = new Buffer(JSON.stringify({name: this.user.getName(), id: this.user.getId()}));
        let token = buff.toString('base64');

        await this.tokenRepo.saveAToken(token);
        return token;
    }
}
