const User = require("../models/user.js");
const bcrypt = require("bcrypt");


//register user api
const register = async (ctx) => {
    try{

        const newStudent = {
            name,
            email,
            address,
            nic,
            password,
            role
        } = ctx.request.body;

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const user = await User.findOne({email:email});

        if(user){
            throw new Error("User already exists!!!");
        }
    
        const student = await User.create({
            name,
            email,
            address,
            nic,
            password:hashedPassword,
            role
        });
    
        ctx.response.status = 200;
        return (ctx.body = {status:"Student registered", Student:student});
    }
    catch(err){
        ctx.response.status = 500;
        ctx.body = err.message;
    };
};


//get all users api
const getAllUsers = async (ctx) => {
    try{
        const users = await User.find();

        ctx.response.status = 200;
        return (ctx.body = {success: true, Users:users})

    }
    catch(err){
        ctx.response.status = 500;
        ctx.body = err.message;
    }
};



//get specific user api
const getUser = async (ctx) => {
    try{        
        const user = await User.findById(ctx.params.id);

        ctx.response.status = 200;
        return(ctx.body = {success:true, User:user})
    }
    catch(err){
        ctx.response.status = 500;
        ctx.body = err.message;
    }
};


//update specific user api
const updateUser = async (ctx) => {
    try{        
        const userdata = ctx.request.body;

        const upsdatedUser = await User.findByIdAndUpdate(ctx.params.id, userdata)

        ctx.response.status = 200;
        return(ctx.body = {success:true, User:upsdatedUser})
    }
    catch(err){
        ctx.response.status = 500;
        ctx.body = err.message;
    }
};


//delet specific user api
const deleteUser = async (ctx) => {
    try{        
        const deletedUser = await User.findByIdAndRemove(ctx.params.id)

        ctx.response.status = 200;
        return(ctx.body = {success:true, User:deletedUser})
    }
    catch(err){
        ctx.response.status = 500;
        ctx.body = err.message;
    }
};


//login user
const loginUser = async (ctx) => {
    try{
        const userData  = ctx.request.body;

        const user = await User.findOne({
            email:userData.email
        })

        if(!user){
            throw new Error("No user...!");
        }else{

            const isMatch = await bcrypt.compare(userData.password, user.password);

            if(isMatch){
                ctx.response.status = 200;
                return(ctx.body = {success:true, User:user});
            }
            else{
                throw new Error("Invalid user...!!!");
            } 
        }
    }
    catch(err){
        ctx.response.status = 500
        ctx.body = err.message;
    }
};



module.exports = {
    register,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    loginUser,
};
