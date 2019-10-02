
import { createStudent, getStudents, updateStudent, inactiveStudent } from '../actions/studentsActions';
import { createTeacher, getTeachers, updateTeacher, inactiveTeacher } from '../actions/teacherActions';
import { createEntryPeriod, getEntryPeriods, updateEntryPeriod, deleteEntryPeriod } from '../actions/entryPeriodActions';
import { createFieldStudy, getFieldStudies, updateFieldStudy, deleteFieldStudy } from '../actions/fieldStudyActions';
import { createEducationalProgram, getEducationalPrograms, updateEducationalProgram, deleteEducationalProgram } from '../actions/educationalProgramActions';
import { createSubject, getSubjects, updateSubject, deleteSubject } from '../actions/subjectActions';

const resolvers = {

    Query: {
        getStudents: async(parent, args, ctx, info) => {
            try {
                return await getStudents();
            } catch (err) {
                return err; 
            }
        },
        getTeachers: async (parent, args, ctx, info) => {
            try {
                return await getTeachers();
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
        },
        getSubjects: async(parent, args, ctx, info) => {
            try {
                return await getSubjects();
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
        addTeacher: async (parent, args, ctx, info) => {
            try {
                const newTeacher = createTeacher(args.data);
                return newTeacher;
            } catch (err) {
                return err;
            }
        },
        updateTeacher: async (parent, { data, userEnrollment }, ctx, info) => {
            try {
                const filter = { userEnrollment }
                const update = { $set: { ...data } }
                return await updateTeacher(filter, update);
            } catch (err) {
                return err;
            }
        },
        deleteTeacher: async (parent, { userEnrollment }, ctx, info) => {
            try {
                const filter = { userEnrollment }
                const update = { $set: { active: false } }
                return await inactiveTeacher(filter, update);
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
        },
        addSubject: async (parent, args, ctx, info) => {
            try {
                const newSubject = createSubject(args.data);
                return newSubject;
            } catch (err) {
                return err;
            }
        },
        updateSubject: async (parent, { data, subjectID }, ctx, info) => {
            try {
                const filter = { _id: subjectID }
                const update = { $set: { ...data } }
                const updated = await updateSubject(filter, update);
                return updated;
            } catch (err) {
                return err;
            }
        },
        deleteSubject: async (parent, { subjectID }, ctx, info) => {
            try {
                const filter = { _id: subjectID }
                return await deleteSubject(filter);
            } catch (err) {
                return err;
            }
        }
    }
}

export default resolvers;