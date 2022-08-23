import { gql } from "apollo-server-express"

export default gql`
    type Comment{
        id: Int!
        createdAt: String!
        updatedAt: String!
        user: User!
        photo: Photo!
        payload: String!
        isMine: Boolean!
    }
`