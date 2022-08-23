import { gql } from "apollo-server-express";

export default gql`
    type Message{
        id: Int!
        payload: String!
        user: User!
        room: Room!
        createdAt: String!
        updatedAt: String!
        read: Boolean!
    }
    type Room{
        id: Int!
        unreadTotal: Int!
        createdAt: String!
        updatedAt: String!
        users:[User]
        messages: [Message]
    }
`