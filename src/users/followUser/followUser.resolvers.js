import client from "../../client";
import { protectedResolver } from "../users.utils";

export default{
    Mutation:{
        followUser: protectedResolver(
            async(_, {userName}, {loggedInUser})=>{
                const ok = await client.user.findUnique({where:{ userName}})
                if(!ok){
                    return{
                        ok: false,
                        error: "This user does not exist. Cannot follow"
                    }
                }
                if (loggedInUser.userName == userName){
                    return{
                        ok: false,
                        error: "Cannot follow yourself"
                    }
                }
                await client.user.update({
                    where: {
                        id: loggedInUser.id
                    },
                    data:{
                        following:{
                            connect:{
                                userName
                            }
                        }
                    }
                })
                return {
                    ok: true
                }
            }
        )
    }
}