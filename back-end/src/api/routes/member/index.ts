import { Router } from "express";
import { Service } from "typedi";
import { MemberCtrl } from './member.ctrl';

@Service()
class MemberRoute {
    private router: Router;

    constructor( 
        public memberCtrl: MemberCtrl
    ) {
        this.router = Router();
        this.setRouter();
    }

    public setRouter() {
        this.router.post('/login', this.memberCtrl.login);
    }

    public getRouter() {
        return this.router;
    }
}

export default MemberRoute;
