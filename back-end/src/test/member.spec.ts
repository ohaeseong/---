import chai from 'chai';
import chaiHttp from 'chai-http';

import config from '../../config';
import { Member } from '../database/models/Member';
import connectDatabase from '../database/connection';
import { after, before } from 'mocha';

chai.use(chaiHttp);

const serverAddress = config.replace;
const should = chai.should();
const expect = chai.expect;

const MemberFormData = {
    id: 'test_id',
    pw: 'test1234',
    accessLevel: 0,
    memberName: 'test',
    profileImage: '',
    phoneNumber: '010-1234-1234'
} as any;

describe('MemberService Test', async () => {
    // before(async () => {
    //     await connectDatabase();

    //     Member.save({
    //         ...MemberFormData,
    //     });
    // });


    context('Login test account', () => {

        // beforeEach(() => {
        //     const MemberFormData = {
        //         memberId: 'test',
        //         pw: 'test1234',
        //         accessLevel: 0,
        //         memberName: 'test',
        //         profileImage: ''
        //     } as any;

        //     Member.save({
        //         ...MemberFormData,
        //     });
        // });
        it('should return 200 and token string', (done) => {
            const body = {
                id: 'test',
                pw: 'test1234'
            };

            setTimeout(() => {
                chai.request(serverAddress)
                .post('/api/member/login')
                .send(body)
                .end((err, res) => {
                    expect(res, err).to.have.status(200);
                    // expect(res.body['data']['token'], `
                    //     user login token type is not string!
                    // `).to.should.have.be.string;
                    done();
                });
            }, 1000);
        });

        it('should return 400', (done) => {
            const body = {
                id: '',
                pw: ''
            };

            chai.request(serverAddress)
            .post('/api/member/login')
            .send(body)
            .end((err, res) => {
                expect(res, err).to.have.status(400);
                done();
            });
        });
    });
});