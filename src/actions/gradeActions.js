import Grade from '../models/Grade';
import { updateAcademicLoad } from './academicLoadActions';

export const createGrade = async (grade) => {
    try {
        const newGrade = await Grade.create(grade);
        const filterAcademic = { _id: grade.academicLoad };
        const update = { $push: { 'grades': newGrade._id } }
        await updateAcademicLoad(filterAcademic, update);
        return newGrade;
    } catch (err) {
        console.error(err)
    }
}

export const getGrades = async () => {
    try {
        const grades = await Grade.find()
            .populate('subject', ['name', 'code', 'educationalProgram', 'teacher'])
            .populate('student', ['name', 'lastName', 'userEnrollment', 'educationalProgram']);
        return grades;
    } catch (err) {
        console.log(err)
    }
}

export const updateGrade = async (filter, update) => {
    try {
        const entryGrade = await Grade.findOneAndUpdate(filter, update);
        return entryGrade;
    } catch (err) {
        console.error(err)
    }
}

export const deleteGrade = async (filter) => {
    try {

        const grade = await Grade.findOne(filter);
        const filterAcademic = { _id: grade.academicLoad };
        const remove = { $pull: { grades : filter._id } };
        await updateAcademicLoad(filterAcademic, remove, { safe: true });

        const deleteGrade = Grade.findOneAndDelete(filter);
        return await deleteGrade;
    } catch (err) {
        console.error(err)
    }
}