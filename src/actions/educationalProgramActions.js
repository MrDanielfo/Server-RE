import EducationalProgram from '../models/EducationalProgram';

export const createEducationalProgram = async (educationalProgram) => {
    try {
        const newEducationalProgram = await EducationalProgram.create(educationalProgram);
        return newEducationalProgram;
    } catch (err) {
        console.error(err)
    }
}

export const getEducationalPrograms = async () => {
    try {
        const educationalPrograms = await EducationalProgram.find()
                                    .populate('fieldStudy', ['area']);
        return educationalPrograms;
    } catch (err) {
        console.log(err)
    }
}

export const updateEducationalProgram = async (filter, update) => {
    try {
        const entryEPUpdated = await EducationalProgram.findOneAndUpdate(filter, update);
        return entryEPUpdated;
    } catch (err) {
        console.error(err)
    }
}

export const deleteEducationalProgram = async (filter) => {
    try {
        const deleteEducationalProgram = EducationalProgram.findOneAndDelete(filter);
        return await deleteEducationalProgram;
    } catch (err) {
        console.error(err)
    }
}