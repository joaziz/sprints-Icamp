import {ItemFinder} from "./ItemFinder";

export class ItemsService {
    find() {
        return new ItemFinder();
    }
}