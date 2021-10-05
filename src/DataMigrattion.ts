import {Item, ItemsRepository} from "./Data/Repositories/ItemsRepository";
import faker from 'faker';

(async () => {

    const itemRepo = new ItemsRepository();

    for (let i = 0; i < 20; i++) {
        const item1 = new Item();
        item1.price = parseFloat(faker.commerce.price());
        item1.description = faker.commerce.productDescription();
        item1.title = faker.commerce.productName();
        item1.rate = parseFloat((Math.random() * 5).toFixed(2))
        item1.imageUrl = "https://via.placeholder.com/450";

        await itemRepo.insert(item1);
    }
})()
