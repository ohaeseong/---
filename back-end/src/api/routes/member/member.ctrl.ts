import { Response } from 'express';
import { Service } from 'typedi';
import * as colorConsole from '../../../lib/console';
import { MemberService } from '../../../services/member.service';
import { MemberRequest } from '../../../types/member.type';

@Service()
export class MemberCtrl {
    constructor(
        private memberService: MemberService,
      ) { }

    public login = async (req: MemberRequest, res: Response) => {
        colorConsole.info('[POST] user login api was called');
        const { body } = req;
    
        if (!body.id) {
            colorConsole.warning('validate 에러!');
            res.status(400).json({
                status: 400,
                message: '요청 오류!',
            });

            return;
        }
        // try {
        //     if (!body.id) {

        //     }
        // } catch (error) {
        //     colorConsole.warning(error);
        //     res.status(400).json({
        //         status: 400,
        //         message: '요청 오류!',
        //     });
        // }

        try {
            res.status(200).json({
                status: 200,
                message: '로그인 성공!',
            });
        } catch (error) {
            colorConsole.error(error);
            res.status(500).json({
                status: 500,
                message: '서버 오류!',
            });
        }

    }
}