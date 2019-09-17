
const books = [
    {
        title: "El llano en llamas",
        author: "Juan Rulfo"
    },
    {
        title: "Las batallas en el desierto",
        author: "José Emilio Pacheco"
    }
];

const resolvers = {
    Query: {
        books : () => books
    }
}

export default resolvers;