import User from '../models/User';

export const createTeacher = async (teacher) => {
    try {
        teacher.role = "TEACHER"
        const newTeacher = await User.create(teacher);
        return newTeacher;
    } catch (err) {
        console.error(err)
    }
}

export const getTeachers = async () => {
    try {
        const teachers = await User.find({ role: "TEACHER", active: true });
        return teachers;
    } catch (err) {
        console.error(err)
    }
}

export const updateTeacher = async (filter, update) => {
    try {
        const teacherUpdated = User.findOneAndUpdate(filter, update, { new: true });
        return await teacherUpdated;
    } catch (err) {
        console.error(err)
    }
}

export const inactiveTeacher = async (filter, update) => {
    try {
        const inactiveTeacher = User.findOneAndUpdate(filter, update);
        return await inactiveTeacher;
    } catch (err) {
        console.error(err);
    }
}