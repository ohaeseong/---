import { makeExecutableSchema } from 'graphql-tools';
import merge from 'lodash/merge';
import * as post from './post';
import * as comment from './comment';

const typeDefs = `
    type Query {
        get_post: [Post]
        get_comments: [Comment]
    }
`
const schema = makeExecutableSchema({ 
    typeDefs: [typeDefs, post.typeDefs, comment.typeDefs],
    resolvers: merge(post.resolver, comment.resolver)
});

export default schema;