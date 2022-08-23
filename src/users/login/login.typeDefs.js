import {gql} from "apollo-server-express"

export default gql`
    type LoginResult{
        ok: Boolean!
        error: String
        token: String
    }

    type Mutation{
        login(userName:String!, password: String!): LoginResult!
    }

`