import client from "../../client"

export default{
    Query:{
        searchPhotos: async(_, {keyword}) =>{
            const result = await client.photo.findMany({
                where:{
                    caption:{
                        startsWith: keyword
                    }
                }
            })
            return result
        }
    }
}