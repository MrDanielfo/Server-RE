
import { createStudent, getStudents, updateStudent, inactiveStudent } from '../actions/studentsActions';
import { createEntryPeriod, getEntryPeriods, updateEntryPeriod, deleteEntryPeriod } from '../actions/entryPeriodActions';

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
                return await deleteEntryPeriod(entryID);
            } catch (err) {
                return err;
            }
        }
    }
}

export default resolvers;