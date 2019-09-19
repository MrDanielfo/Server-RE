import User from '../models/User';
import { createToken }  from './userActions';

export const createStudent = async (student) => {
    try {
        student.role = "STUDENT"
        const newStudent = await User.create(student);
        const token = createToken(newStudent);
        return token;
    } catch (err) {
        console.error(err)
    }
}

export const getStudents = async () => {
    try {
        const students = await User.find({ role: "STUDENT", active: true });
        return students;
    } catch (err) {
        console.error(err)
    }
}

export const updateStudent = async (filter, update) => {
    try {
        const studentUpdated = User.findOneAndUpdate(filter, update, { new: true});
        return await studentUpdated;
    } catch (err) {
        console.error(err)
    }
}

export const inactiveStudent = async (filter, update) => {
    try {
        const inactiveStudent = User.findOneAndUpdate(filter, update);
        return await inactiveStudent; 
    } catch (err) {
        console.error(err)
    }
}