import client from "../../client"

export default{
    Query:{
        seeFollowers: async(_, {userName, page}) =>{
            try {
                const pageSzie = 1
                const aFollowers = await client.user.findUnique({
                    where:{
                        userName
                    },
                    include:{
                        followers: true
                    },
                    skip:   (page-1)*5,
                    take:   5
                })

                const totalFollowers = await client.user.count({
                    where:{
                        userName
                    },
                    include:{
                        followers: true
                    }
                })


                return {
                    ok: true,
                    //take 5 per page
                    followers: aFollowers.followers.slice((page-1)*pageSzie,(page-1)*pageSzie+pageSzie),
                    totalPages: math.ceil(totalFollowers/5)
                    
                    }
            } catch (error) {
                return {
                    ok: false,
                    error: "Something wrong on SeeFeollowers"
                    
                }
            
            // const bFollowers = await client.user.findMany({
            //     where: {
            //         following: {
            //             some: {
            //                 userName
            //             }
            //         }
            //     }
            // })
            } 
        } 
    }
}

