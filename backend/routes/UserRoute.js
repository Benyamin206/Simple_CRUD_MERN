import express from "express"
import { getUsers, getUserById, saveUser, updateUser, deleteUser } from "../controllers/UserController.js"


const routes = express.Router()

routes.get('/users', getUsers)
routes.get('/user/:id', getUserById)
routes.post('/users', saveUser)
routes.patch('/users/:id', updateUser)
routes.delete('/users/:id', deleteUser)


export default routes