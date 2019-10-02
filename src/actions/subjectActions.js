import Subject from '../models/Subject';

export const createSubject = async (subject) => {
    try {
        const newSubject = await Subject.create(subject);
        return newSubject;
    } catch (err) {
        console.error(err)
    }
}

export const getSubjects = async () => {
    try {
        const subjects = await Subject.find()
                                        .populate('educationalProgram', ['name'])
                                        .populate('teacher', ['name', 'lastName']);
        return subjects;
    } catch (err) {
        console.log(err)
    }
}

export const updateSubject = async (filter, update) => {
    try {
        const subjectUpdated = await Subject.findOneAndUpdate(filter, update);
        return subjectUpdated;
    } catch (err) {
        console.error(err)
    }
}

export const deleteSubject = async (filter) => {
    try {
        const deleteSubject = Subject.findOneAndDelete(filter);
        return await deleteSubject;
    } catch (err) {
        console.error(err)
    }
}