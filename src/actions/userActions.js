import User from '../models/User';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { SECRET } from '../config/keys';

// función para el tiempo de vida del token
Date.prototype.addDays = function (days) {
    const date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

export const createToken = (user) => {
    const exp = new Date().addDays(1).getTime();
    const payload = {
        _id: user._id,
        userEnrollment: user.userEnrollment,
        name: user.name,
        exp,
    };
    const token = jwt.sign(payload, SECRET);
    return { token }; 
}

export const loginAction = async (userEnrollment, password) => {
    try {
        const user = await User.findOne({ userEnrollment })
        if (user) {
            const passwordb = await bcrypt.compare(password, user.password);
            if (passwordb) {
                let token = createToken(user);
                return token;
            } else {
                let token = null;
                return token;
            }
        }
    } catch (err) {
        console.log(err)
    }
}

export const findUser = async (filter) => {
    try {
        return await User.findOne(filter);
    } catch (error) {
        return error;
    }
}
