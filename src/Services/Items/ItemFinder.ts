import {ItemsRepository} from "../../Data/Repositories/ItemsRepository";

export class ItemFinder {
    private readonly itemRepo = new ItemsRepository();

    async all() {
        return this.itemRepo.all();
    }

    async byId(id: string) {
        return this.itemRepo.byId(id)
    }
}