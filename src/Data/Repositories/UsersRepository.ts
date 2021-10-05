import {BaseRepository} from "./BaseRepository";


export class User {
    constructor(private data: any) {
    }

    getPassword() {
        return this.data.password;
    }


    getName() {
        return "yousif";
    }

    getId() {
        return "1645451674545465";
    }
}

export class UsersRepository extends BaseRepository {
    collectionName: string = "users";

    async getUserByUsername(username: string): Promise<User | null> {
        let users = await this.all({username: username});
        return (users && users?.length > 0) ? new User(users[0]) : null
    }
}