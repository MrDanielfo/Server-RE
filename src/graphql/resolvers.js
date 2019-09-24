
import { createStudent, getStudents, updateStudent, inactiveStudent } from '../actions/studentsActions';
import { createEntryPeriod, getEntryPeriods, updateEntryPeriod, deleteEntryPeriod } from '../actions/entryPeriodActions';
import { createFieldStudy, getFieldStudies, updateFieldStudy, deleteFieldStudy } from '../actions/fieldStudyActions';
import { createEducationalProgram, getEducationalPrograms, updateEducationalProgram, deleteEducationalProgram } from '../actions/educationalProgramActions';

const resolvers = {

    Query: {
        getStudents: async(parent, args, ctx, info) => {
            try {
                return await getStudents();
            } catch (err) {
                return err; 
            }
        },
        getEntryPeriods: async(parent, args, ctx, info) => {
            try {
                return await getEntryPeriods();
            } catch (err) {
                return err;
            }
        },
        getFieldStudies: async(parent, args, ctx, info) => {
            try {
                return await getFieldStudies();
            } catch (err) {
                return err;
            }
        },
        getEducationalPrograms: async(parent, args, ctx, info) => {
            try {
                return await getEducationalPrograms();
            } catch (err) {
                return err;
            }
        }
    },
    Mutation: {
        addStudent: async (parent, args, ctx, info) => {
            try {
                const newStudent = createStudent(args.data);
                return newStudent;
            } catch (err) {
                return err;
            }
        },
        updateStudent: async (parent, {data, userEnrollment}, ctx, info) => {
            try {
                const filter = { userEnrollment }
                const update = { $set: { ...data } }
                return await updateStudent(filter, update);
            } catch (err) {
                return err; 
            }
        },
        deleteStudent: async (parent, { userEnrollment }, ctx, info) => {
            try {
                const filter = { userEnrollment }
                const update = { $set: { active: false }}
                return await inactiveStudent(filter, update); 
            } catch (err) {
                return err; 
            }
        },
        addEntryPeriod: async (parent, args, ctx, info) => {
            try {
                const newEntryPeriod = createEntryPeriod(args.data);
                return newEntryPeriod;
            } catch (err) {
                return err;
            }
        },
        updateEntryPeriod: async (parent, {data, entryID }, ctx, info) => {
            try {
                const filter = { _id : entryID }
                const update = { $set: { ...data }}
                const updated = await updateEntryPeriod(filter, update);
                return updated;
            } catch (err) {
                return err;
            }
        },
        deleteEntryPeriod: async (parent, { entryID }, ctx, info) => {
            try {
                const filter = { _id : entryID }
                return await deleteEntryPeriod(filter);
            } catch (err) {
                return err;
            }
        },
        addFieldStudy: async (parent, args, ctx, info) => {
            try {
                const newFieldStudy = createFieldStudy(args.data);
                return newFieldStudy;
            } catch (err) {
                return err;
            }
        },
        updateFieldStudy: async (parent, {data, fieldID }, ctx, info) => {
            try {
                const filter = { _id : fieldID }
                const update = { $set: { ...data }}
                const updated = await updateFieldStudy(filter, update);
                return updated;
            } catch (err) {
                return err;
            }
        },
        deleteFieldStudy: async (parent, { fieldID }, ctx, info) => {
            try {
                const filter = { _id : fieldID }
                return await deleteFieldStudy(filter);
            } catch (err) {
                return err;
            }
        },
        addEducationalProgram: async (parent, args, ctx, info) => {
            try {
                const newEducationalProgram = createEducationalProgram(args.data);
                return newEducationalProgram;
            } catch (err) {
                return err;
            }
        },
        updateEducationalProgram: async (parent, { data, educationalID }, ctx, info) => {
            try {
                const filter = { _id : educationalID }
                const update = { $set: { ...data }}
                const updated = await updateEducationalProgram(filter, update);
                return updated;
            } catch (err) {
                return err;
            }
        },
        deleteEducationalProgram: async (parent, { educationalID }, ctx, info) => {
            try {
                const filter = { _id : educationalID }
                return await deleteEducationalProgram(filter);
            } catch (err) {
                return err;
            }
        }
    }
}

export default resolvers;