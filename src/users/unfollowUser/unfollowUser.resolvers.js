
import client from "../../client";
import { protectedResolver } from "../users.utils";

export default{
    Mutation:{
        unfollowUser:protectedResolver(
            async(_, {userName}, {loggedInUser})=>{
                try {
                    const ok = await client.user.findUnique({
                        where: {userName}
                    })
                    if (!ok){
                        return{
                            ok: false,
                            error: "User not exist"
                        }
                    }
                    await client.user.update({
                        where:{
                            id: loggedInUser.id
                        },
                        data:{
                            following:{
                                disconnect:{
                                    userName
                                }
                            } 
                        }
                    })
                    return{
                        ok: true
                    }
                } catch (error) {
                    return {
                        ok: false,
                        error: error.message
                    }
                }
                
            }
        )
    }
}