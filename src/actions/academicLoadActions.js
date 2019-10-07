import AcademicLoad from '../models/AcademicLoad';
import { updateStudent } from './studentsActions';

export const createAcademicLoad = async (academicLoad) => {
    try {
        const newAcademicLoad = await AcademicLoad.create(academicLoad);
        const filterStudent = { _id: academicLoad.student };
        const update = { $push: { 'academicLoad': newAcademicLoad._id } }
        await updateStudent(filterStudent, update);
        return newAcademicLoad;
    } catch (err) {
        console.error(err)
    }
}

export const getAcademicLoads = async () => {
    try {
        const academicLoad = await AcademicLoad.find()
                .populate('student', ['name', 'lastName', 'userEnrollment'])
                .populate('grades', ['subject', 'first', 'second', 'third', 'final', 'approved']);
        return academicLoad;
    } catch (err) {
        console.log(err)
    }
}

export const updateAcademicLoad = async (filter, update) => {
    try {
        const academicLoadUpdated = await AcademicLoad.findOneAndUpdate(filter, update, { new: true });
        return academicLoadUpdated;
    } catch (err) {
        console.error(err)
    }
}

export const deleteAcademicLoad = async (filter) => {
    try {
        
        const student = await AcademicLoad.findOne(filter);
        const filterStudent = { _id: student.student };
        const remove = { $pull: { academicLoad : filter._id } };
        await updateStudent(filterStudent, remove, { safe: true });

        const deleteAcademicLoad = AcademicLoad.findOneAndDelete(filter);
        return await deleteAcademicLoad;
    } catch (err) {
        console.error(err)
    }
}