import {BaseRepository} from "./BaseRepository";

export class Item {
    public title: null | string = null;
    public description: null | string = null;
    public imageUrl: null | string = null;
    public price: null | number = null;
    public rate: null | number = null;
}

export class ItemsRepository extends BaseRepository {
    collectionName: string = "item";


    insert(data: Item): Promise<unknown> {
        return super.insert(data);
    }

    byId(id:string) {
        return this.findById(id);
    }
}