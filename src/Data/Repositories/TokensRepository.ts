import {BaseRepository} from "./BaseRepository";


export class TokensRepository extends BaseRepository {
    collectionName: string = "tokens";


    saveAToken(token: string) {
        return this.insert({token})
    }

    async isExits(tokenString: any) {
        let data = await this.all({token: tokenString});
        console.log(data,tokenString)
        return data && data?.length > 0
    }
}