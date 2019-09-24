import FieldStudy  from '../models/FieldStudy';

export const createFieldStudy = async (fieldStudy) => {
    try {
        const newFieldStudy = await FieldStudy.create(fieldStudy);
        return newFieldStudy;
    } catch (err) {
        console.error(err)
    }
}

export const getFieldStudies = async () => {
    try {
        const fieldStudies = await FieldStudy.find();
        return fieldStudies;
    } catch (err) {
        console.log(err)
    }
}

export const updateFieldStudy = async (filter, update) => {
    try {
        const fieldStudyUpdated = await FieldStudy.findOneAndUpdate(filter, update);
        return fieldStudyUpdated;
    } catch (err) {
        console.error(err)
    }
}

export const deleteFieldStudy = async (filter) => {
    try {
        const deleted = FieldStudy.findOneAndDelete(filter);
        return await deleted;
    } catch (err) {
        console.error(err)
    }
}