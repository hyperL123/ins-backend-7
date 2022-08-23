import client from "../../client"

export default{
    Query:{
        seeHashTag: async(_, {name}) =>{
            const tags = await client.hashTag.findUnique({
                where: {
                    name
                }
            })
            return tags
        }
    }
}