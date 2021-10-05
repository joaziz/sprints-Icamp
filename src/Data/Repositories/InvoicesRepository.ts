import {BaseRepository} from "./BaseRepository";


export class InvoicesRepository extends BaseRepository {
    collectionName: string = "invoices";


    createInvoice(body: any): Promise<string> {
        return this.insert(body)
    }
}