import express from "express";
import {AuthService} from "../../Services/Auth/AuthService";

export const AuthController = express.Router();


AuthController.post("/login", async (req, res) => {
    const {username, password} = req.body;
    if (!username || !password)
        return res.status(400).json({message: "missing or invalid credential"});


    let authService = new AuthService()
    let attemp = await authService.attempLogin.login(username, password);

    if (!attemp.isValid())
        return res.status(400).json({message: "missing or invalid credential"});


    res.status(200).json({token: await attemp.getToken()});
});




