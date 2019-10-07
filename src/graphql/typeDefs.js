import { gql } from 'apollo-server';

const typeDefs = gql`

    enum Role {
        SUPER
        ADMIN
        TEACHER
        STUDENT
    }

    enum Gender {
        HOMBRE
        MUJER
    }

    enum Period {
        PRIMAVERA
        OTONO
    }

    type Token {
        token: String
    }

    type Notice {
        _id: ID
        author: User
        title: String!
        body: String!
        published: Boolean!
    }
    
    type EntryPeriod {
        _id : ID
        season: String!
        year: Int!
    }

    type FieldStudy {
        _id : ID
        area: String!
    }

    type Subject {
        _id: ID
        name: String!
        code: String!
        educationalProgram: EducationalProgram
        credits: Int!
        teacher: User
        classroom: String
        schedule: String
    }

    type Grade {
        _id: ID
        subject: Subject
        student: User
        academicLoad: AcademicLoad
        first: Float!
        second: Float!
        third: Float!
        final: Int!
    }

    type AcademicLoad {
        _id : ID
        name: String!
        student: User
        period: String!
        grades: [Grade]
        active: Boolean!
    }

    type EducationalProgram {
        _id : ID
        name: String!
        code: String!
        yearCreation: String!
        subjects: [Subject]
        fieldStudy: FieldStudy!
    }

    type User {
        _id : ID
        name: String!
        lastName: String!
        userEnrollment: Int!
        role: Role
        educationalProgram: EducationalProgram
        entryPeriod: EntryPeriod
        email: [String]
        password: String!
        phone: [String]
        address: String
        gender: Gender
        dateofBirth: String!
        academicLoad: [AcademicLoad]
        active: Boolean!
    }

    input UserInput {
        name: String!
        lastName: String!
        userEnrollment: Int!
        password: String!
        gender: Gender
        dateofBirth: String!
        active: Boolean!
    }

    input UpdateStudentInput {
        name: String
        lastName: String
        userEnrollment: Int
        password: String
        email: [String]
        phone: [String]
        address: String
        educationalProgram: ID
        entryPeriod: ID
        gender: Gender
        dateofBirth: String
        academicLoad: ID
    }

    input EntryPeriodInput {
        season: Period
        year: Int
    }

    input FieldStudyInput {
        area: String!
    }

    input EducationalProgramInput {
        name: String!
        code: String!
        yearCreation: String!
        subjects: ID
        fieldStudy: ID!
    }

    input EducationalProgramUpdateInput {
        name: String
        code: String
        yearCreation: String
        fieldStudy: ID
    }

    input SubjectInput {
        name: String!
        code: String!
        educationalProgram: ID
        credits: Int!
        teacher: ID
        classroom: String
        schedule: String
    }
    
    input NoticeInput {
        author: ID!
        title: String!
        body: String!
        published: Boolean!
    }

    input GradeInput {
        subject: ID!
        student: ID!
        academicLoad: ID!
        first: Float
        second: Float
        third: Float
        final: Float
        approved: Boolean
    }

    input AcademicLoadInput {
        name: String
        student: ID!
        period: String
        grades: ID
        active: Boolean
    }

    type Query {
        getStudents: [User]
        getTeachers: [User]
        getEntryPeriods: [EntryPeriod]
        getFieldStudies: [FieldStudy]
        getEducationalPrograms: [EducationalProgram]
        getSubjects: [Subject]
        getNotices: [Notice]
        getGrades: [Grade]
        getAcademicLoads: [AcademicLoad]
    }

    type Mutation {
        addStudent(data: UserInput): Token
        updateStudent(data: UpdateStudentInput, userEnrollment: Int): User
        deleteStudent(userEnrollment: Int): User
        addTeacher(data: UserInput): Token
        updateTeacher(data: UpdateStudentInput, userEnrollment: Int): User
        deleteTeacher(userEnrollment: Int): User
        addEntryPeriod(data: EntryPeriodInput): EntryPeriod
        updateEntryPeriod(data: EntryPeriodInput, entryID: ID): EntryPeriod
        deleteEntryPeriod(entryID: ID): EntryPeriod
        addFieldStudy(data: FieldStudyInput): FieldStudy
        updateFieldStudy(data: FieldStudyInput, fieldID: ID): FieldStudy
        deleteFieldStudy(fieldID: ID): FieldStudy
        addEducationalProgram(data: EducationalProgramInput): EducationalProgram
        updateEducationalProgram(data: EducationalProgramUpdateInput, educationalID: ID): EducationalProgram
        deleteEducationalProgram(educationalID: ID): EducationalProgram
        addSubject(data: SubjectInput): Subject
        updateSubject(data: SubjectInput, subjectID: ID): Subject
        deleteSubject(subjectID: ID): Subject
        addNotice(data: NoticeInput): Notice
        updateNotice(data: NoticeInput, noticeID: ID): Notice
        deleteNotice(noticeID: ID): Notice
        addGrade(data: GradeInput): Grade
        updateGrade(data: GradeInput, gradeID: ID): Grade
        deleteGrade(gradeID: ID): Grade
        addAcademicLoad(data: AcademicLoadInput): AcademicLoad
        updateAcademicLoad(data: AcademicLoadInput, academicID: ID): AcademicLoad
        deleteAcademicLoad(academicID: ID): AcademicLoad
    }

`;


export default typeDefs;