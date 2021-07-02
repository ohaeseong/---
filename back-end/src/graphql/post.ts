import { buildSchema } from "graphql";

const typeDefs = buildSchema(`
    type Post {
        id: String
        title: String
        description: String
        createTime: String
        updateTime: String
        writer: String
        thumbnailAddress: String
    }
`);

export default typeDefs;
