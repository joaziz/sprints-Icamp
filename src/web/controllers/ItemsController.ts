import express from "express";
import {ItemsService} from "../../Services/Items/ItemsService";

const itesmService = new ItemsService();

export const ItemsController = express.Router();

ItemsController.get("/", async (req, res) => {
    res.json({data: await itesmService.find().all()});
});

ItemsController.get("/:id", async (req, res) => {
    // console.log(req.params.id)
    try {
        let item = await itesmService.find().byId(req.params.id)
        return res.json({data: item});
    } catch (e) {
        return res.status(400).json({message: "some thing wrong happen"});

    }
});