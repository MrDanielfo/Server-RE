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

const createToken = (user) => {
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

export const createStudent = async (student) => {
    try {
        const newStudent = await User.create(student);
        const token = createToken(newStudent);
        return token;
    } catch (err) {
        console.error(err)
    }
}