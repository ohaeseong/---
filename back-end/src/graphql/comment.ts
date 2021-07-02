import { buildSchema } from "graphql";

const typeDefs = buildSchema(`
    type Comment {
        id: String
        postId: String
        commentTxt: String
        createTime: String
        writer: String
    }
`);

export default typeDefs;
