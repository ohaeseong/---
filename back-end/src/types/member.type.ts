import { Request } from 'express';

export interface MemberRequest extends Request {
    decoded?: any;
}