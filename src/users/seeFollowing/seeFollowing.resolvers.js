import client from "../../client"

export default{
    Query:{
        seeFollowing: async(_, {userName, lastID})=>{
            const ok = await client.user.findUnique({
                where: {userName},
                select: {id: true}
            })

            if(!ok){
                return{
                    ok:false,
                    error: "User not found"
                }
            }

            const Afollowing = await client.user.findUnique({
                where: {
                    userName
                }
                
                // ...(lastID && {cursor: {id: lastID}})
            }).following({
                take: 5,
                skip: 1,
                ...(lastID&&{cursor:{id: lastID}})
            })
            return {
                ok: true,
                following:Afollowing
            }
        }
    }
}