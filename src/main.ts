import bodyParser from 'body-parser';
import express from "express"
import {logger} from "joagger"
import cors from 'cors';
import {AuthController} from "./web/controllers/AuthController";
import {UsersRepository} from "./Data/Repositories/UsersRepository";
import {AuthService} from "./Services/Auth/AuthService";
import {ItemsController} from "./web/controllers/ItemsController";
import {CheckOutController} from "./web/controllers/checkout";


const app = express();
const port: string = (8500).toString();

app.use(cors())
app.use(bodyParser.json())


app.use("/auth", AuthController);
app.use("/items", ItemsController);
app.use("/checkout", CheckOutController);


// new UsersRepository().insert({username: "mostafa", password: AuthService.hashPassword("123456")})
// new UsersRepository().insert({username: "sameh", password: AuthService.hashPassword("123456")})


app.listen(port, () => logger("init app").info(`server run on port ${port}`))
