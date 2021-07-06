import { Router } from "express";
import { Service } from "typedi";
import { Container } from "typeorm-typedi-extensions";
import MemberRoute from "./routes/member";

@Service()
class RootRouter {
    private router: Router;

    constructor( ) {
        this.router = Router();
        this.setRouter();
    }

    private setRouter() {
        this.router.use('/member', Container.get(MemberRoute).getRouter());
    }

    public getRouter() {
        return this.router;
    }
}

export default RootRouter;
