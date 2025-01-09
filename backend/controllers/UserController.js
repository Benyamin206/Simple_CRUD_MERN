import User from "../models/UserModel.js"

// export const getUsers = async (req, res) => {
//     try{
//         const users = await User.find()
//         res.json(users)
//     }catch(e){
//         res.status(500).json({message : e.message})
//     }
// }

const fgetUsers = () => {
    return new Promise((resolve, reject) => {
        resolve(User.find())
    })
}

export const getUsers = async (req, res) => {
    // fgetUsers().then(data => res.json(data))
    const users = await fgetUsers()
    res.json(users)
}

export const getUserById = async (req, res) => {
    try{
        const user = await User.findById(req.params.id)
        res.json(user)
    }catch(e){
        res.status(404).json({message : e.message})
    }
}


export const saveUser = async (req, res) => {
    const user = new User(req.body)
    try{
        const insertedUser = await user.save()
        res.status(201).json(insertedUser)
    }catch(e){
        res.status(400).json({message : e.message})
    }
}

export const updateUser = async (req, res) => {
    try{
        const updatedUser = await User.updateOne({_id : req.params.id}, {$set : req.body})
        res.status(200).json(updatedUser)
    }catch(e){
        res.status(400).json({message : e.message})
    }
}


// delete controller of user
export const deleteUser = async (req, res) => {
    try{
        const deletedUser = await User.deleteOne({_id : req.params.id})
        res.status(200).json(deletedUser)
    }catch(e){
        res.status(400).json({message : e.message})
    }
}

