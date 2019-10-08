import jwt from 'jsonwebtoken';
import { SECRET } from '../config/keys';
import { findUser } from './userActions';

export const getContext = (req) => {
    try {
        const token = req.headers.authorization;
        if (typeof token === typeof undefined) return req;
        return jwt.verify(token, SECRET, async function (err, result) {
            if (err) return req;
            try {
                const currentUser = await findUser({ userEnrollment: result.userEnrollment });
                return { ...req, currentUser };
            } catch (error) {
                return {
                    req,
                    msg: `Error... verifying auth token with error: ${error}`
                };
            }
        });
    } catch (err) {
        return req;
    }
}