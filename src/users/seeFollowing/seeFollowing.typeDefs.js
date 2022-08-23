import { gql } from "apollo-server-express";

export default gql`

    type seeFolloweringResult{
        ok: Boolean!
        error: String
        following: [User]
    }

    type Query{
        seeFollowing(userName: String!, lastID: Int): seeFolloweringResult!
    }
`