import client from "../../client";
import { protectedResolver } from "../../users/users.utils";
import { processHashTags } from "../photos.utils";

export default{
    Mutation:{
        editPhoto: protectedResolver(
            async(_, {id, caption}, {loggedInUser})=>{
                try {
                    const oldPhoto = await client.photo.findFirst({
                        where:{
                            id,
                            userId: loggedInUser.id
                        },
                        include:{
                            hashTags:true
                        }
                    })
                    if(!oldPhoto){
                        return {
                            ok: false,
                            error: "Photo not found"
                        }
                    }

                    await client.photo.update({
                        where:{
                            id
                        },
                        data:{
                            caption,
                            hashTags:{
                                disconnect: (oldPhoto.hashTags.map(item=>{
                                    return {
                                        name: item.name
                                    }
                                })),
                                connectOrCreate: processHashTags(caption),
                              
                            }
                        }
                    })
                    return {
                        ok: true
                    }
                } catch (error) {
                    console.log(error.message)
                }
                
        })
    }
}