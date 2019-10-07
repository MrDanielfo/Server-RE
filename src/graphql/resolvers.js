
import { createStudent, getStudents, updateStudent, inactiveStudent } from '../actions/studentsActions';
import { createTeacher, getTeachers, updateTeacher, inactiveTeacher } from '../actions/teacherActions';
import { createEntryPeriod, getEntryPeriods, updateEntryPeriod, deleteEntryPeriod } from '../actions/entryPeriodActions';
import { createFieldStudy, getFieldStudies, updateFieldStudy, deleteFieldStudy } from '../actions/fieldStudyActions';
import { createEducationalProgram, getEducationalPrograms, updateEducationalProgram, deleteEducationalProgram } from '../actions/educationalProgramActions';
import { createSubject, getSubjects, updateSubject, deleteSubject } from '../actions/subjectActions';
import { createNotice, getNotices, updateNotice, deleteNotice } from '../actions/noticeActions';
import { createGrade, getGrades, updateGrade, deleteGrade } from '../actions/gradeActions';
import { createAcademicLoad, getAcademicLoads, updateAcademicLoad, deleteAcademicLoad } from '../actions/academicLoadActions';

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
        },
        getNotices: async () => {
            try {
                return await getNotices();
            } catch (err) {
                return err;
            }
        },
        getGrades: async () => {
            try {
                return await getGrades();
            } catch (err) {
                return err;
            }
        },
        getAcademicLoads: async () => {
            try {
                return await getAcademicLoads();
            } catch (err) {
                return err;
            }
        }
    },
    Mutation: {
        addStudent: async (parent, args, ctx, info) => {
            try {
                const newStudent = await createStudent(args.data);
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
                const newEntryPeriod = await createEntryPeriod(args.data);
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
                const newFieldStudy = await createFieldStudy(args.data);
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
                const newEducationalProgram = await createEducationalProgram(args.data);
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
        },
        addNotice: async (parent, { data }, ctx, info ) => {
            try {
                const newNotice = await createNotice(data);
                return newNotice;
            } catch (err) {
                return err;
            }
        },
        updateNotice: async (parent, { data, noticeID }, ctx, info) => {
            try {
                const filter = { _id: noticeID }
                const update = { $set: { ...data } }
                const updated = await updateNotice(filter, update);
                return updated;
            } catch (err) {
                return err;
            }
        },
        deleteNotice: async (parent, { noticeID }, ctx, info) => {
            try {
                const filter = { _id: noticeID }
                return await deleteNotice(filter);
            } catch (err) {
                return err;
            }
        },
        addGrade: async (parent, { data }, ctx, info) => {
            try {
                const newGrade = await createGrade(data);
                return newGrade;
            } catch (err) {
                return err;
            }
        },
        updateGrade: async (parent, { data, gradeID }, ctx, info) => {
            try {
                const filter = { _id: gradeID }
                const update = { $set: { ...data } }
                const updated = await updateGrade(filter, update);
                return updated;
            } catch (err) {
                return err;
            }
        },
        deleteGrade: async (parent, { gradeID }, ctx, info) => {
            try {
                const filter = { _id: gradeID }
                return await deleteGrade(filter);
            } catch (err) {
                return err;
            }
        },
        addAcademicLoad: async (parent, { data }, ctx, info) => {
            try {
                const newAcademicLoad = await createAcademicLoad(data);
                return newAcademicLoad;
            } catch (err) {
                return err;
            }
        },
        updateAcademicLoad: async (parent, { data, academicID }, ctx, info) => {
            try {
                const filter = { _id: academicID }
                const update = { $set: { ...data } }
                const updated = await updateAcademicLoad(filter, update);
                return updated;
            } catch (err) {
                return err;
            }
        },
        deleteAcademicLoad: async (parent, { academicID }, ctx, info) => {
            try {
                const filter = { _id: academicID }
                return await deleteAcademicLoad(filter);
            } catch (err) {
                return err;
            }
        }
    }
}

export default resolvers;