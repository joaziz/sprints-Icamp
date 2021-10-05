import express from "express";
import {CheckoutService} from "../../Services/CheckOut/CheckoutService";

const checkOutService = new CheckoutService();
;
export const CheckOutController = express.Router();

CheckOutController.post("/", async (req, res) => {
    let invoice = await checkOutService.checkout(req.body);
    return res.json({invoice_id: invoice});
});
