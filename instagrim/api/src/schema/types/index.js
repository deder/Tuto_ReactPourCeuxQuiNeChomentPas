const typeDefs = `
scalar Date

type User {
    id: ID!
    username: String!
    email: String!
    posts: [Post]
    avatar: String
    bio: String
    feed(last: Int): [Post]
}

type Token {
    token: String!
    exp: Date!
}

type Post {
    id: ID!
    image: String!
    description: String
    author: User! 
}

type Query {
    user(username: String!, token: String, last: Int): User
    post(id: ID!): Post
}

type Mutation {
    createUser(username: String!, email: String!, password: String!,avatar: String, bio: String): User!
    updateUser(token: String!, email: String, password: String, avatar: String, bio: String): User
    authenticateUser(email: String!, password: String!): Token
    createPost(description: String, image: String!, token: String!): Post
}
`;

module.exports = typeDefs;