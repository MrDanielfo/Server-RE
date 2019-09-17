
import { createStudent } from '../actions/userActions';


const resolvers = {

    Query: {
        
    },
    Mutation: {
        addStudent: async (parent, args, ctx, info) => {
            try {
                const newStudent = createStudent(args.data);
                return newStudent;
            } catch (err) {
                return err;
            }
        }
    }
}

export default resolvers;