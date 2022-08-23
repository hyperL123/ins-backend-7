import client from "../client";

export default{
    Room:{
        users:({id})=>client.room.findUnique({where:{id}}).users(),
        //do pagination
        messages:({id})=>client.message.findMany({
            where:{
                roomId:id
            }
        }),
        unreadTotal: ({id},_,{loggedInUser})=> {
            if(!loggedInUser){
                return 0
            }
            try {
                return client.message.count({
                    where:{
                        read:false,
                        roomId: id,
                        user:{
                            id:{
                                not: loggedInUser.id
                            }
                        }
                    }
            })
            } catch (error) {
                console.log(error)
            }
       
            
        }
    },
    Message:{
        user:({id})=>client.message.findUnique({where:{id}}).user()
    }
}