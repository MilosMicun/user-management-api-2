import users from "../data/users.js";

function getUsers(req,res,next) {
    return res.json(users);
};

function createUser(req,res,next) {
    const {name,email}=req.body
    if(!name || !email){
        const error = new Error("name and email are required");
        error.status = 400;
        return next(error);
    }

    const newUser = {name,email};
    users.push(newUser);
    res.status(201).json({
        message:"new user created",
        user:newUser
    });
};

export {getUsers,createUser};