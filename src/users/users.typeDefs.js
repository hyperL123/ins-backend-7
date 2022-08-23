import {gql} from "apollo-server-express"

export default gql`
    type User{
        id: Int!
        firstName:String!
        lastName:String
        userName:String!
        email:String!
        password:String!
        createdAt:String!
        updatedAt:String!
        bio:String
        avatar:String
        followers: [User]
        following: [User]
        totalFollowers: Int!
        totalFollowing: Int!
        photos: [Photo]
        isFollowing: Boolean!
        isMe: Boolean!
    }
`