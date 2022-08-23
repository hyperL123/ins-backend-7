import client from "../../client"
import bcrypt from "bcrypt"
require("dotenv").config()
export default{
    Mutation: {
        createAccount: 
            async(_, {firstName, lastName, userName, email, password})=>{
            // check if username or email are already on DB
                try {
                    //find existingUser
                    const existingUser = await client.user.findFirst({
                        where: {
                            OR: [
                                {userName},{email}
                            ]
                        }
                    })
                    //if not exist, error
                    if (existingUser){
                        throw new Error("This username/password is already token")
                    }
                    //hash password
                    const uglyPassword = await bcrypt.hash(password, 10)
                    //create user with hashed pw
                    const user =  await client.user.create({data:{
                        userName,
                        email,
                        firstName,
                        lastName,
                        password: uglyPassword
                    }})


                    return {
                        ok: true
                    }
                } catch (error) {
                    //catch any errors in try
                    return {
                        ok: false,
                        error: "Cannot create account"
                    }
                }
        }
    }
}