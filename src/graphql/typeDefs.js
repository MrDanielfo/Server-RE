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
        schedule: [String]
    }

    type Grade {
        _id: ID
        subject: Subject
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
        password: String
        email: [String]
        phone: [String]
        address: String
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

    type Query {
        getStudents: [User]
        getEntryPeriods: [EntryPeriod]
        getFieldStudies: [FieldStudy]
        getEducationalPrograms : [EducationalProgram]
    }

    type Mutation {
        addStudent(data: UserInput): Token
        updateStudent(data: UpdateStudentInput, userEnrollment: Int): User
        deleteStudent(userEnrollment: Int): User
        addEntryPeriod(data: EntryPeriodInput): EntryPeriod
        updateEntryPeriod(data: EntryPeriodInput, entryID: ID): EntryPeriod
        deleteEntryPeriod(entryID: ID): EntryPeriod
        addFieldStudy(data: FieldStudyInput): FieldStudy
        updateFieldStudy(data: FieldStudyInput, fieldID: ID): FieldStudy
        deleteFieldStudy(fieldID: ID): FieldStudy
        addEducationalProgram(data: EducationalProgramInput): EducationalProgram
        updateEducationalProgram(data: EducationalProgramUpdateInput, educationalID: ID): EducationalProgram
        deleteEducationalProgram(educationalID: ID): EducationalProgram
    }

`;


export default typeDefs;