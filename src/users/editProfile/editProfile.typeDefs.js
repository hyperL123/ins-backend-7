import {gql} from "apollo-server-express"
export default gql`
    scalar Upload
    type Mutation{
        editProfile(
            firstName:String
            lastName:String
            userName:String
            email:String
            password: String
            bio:String
            avatar: Upload
        ): MutationResponse
    }
`