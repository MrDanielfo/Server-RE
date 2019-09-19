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
