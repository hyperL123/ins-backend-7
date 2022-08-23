import client from "../../client"

export default{
    Query:{
        seeProfile: async(_, {userName})=>{
            const profile = await client.user.findUnique({
                where:{
                    userName
                },
                include:{
                    following: true,
                    followers: true
                }
            })
            return profile
        }
    }
}