import {InvoicesRepository} from "../../Data/Repositories/InvoicesRepository";

export class CheckoutService {
    private readonly repo = new InvoicesRepository();

    checkout(body: any): Promise<any> {
        return this.repo.createInvoice(body);
    }
}