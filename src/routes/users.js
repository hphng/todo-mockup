import express from 'express';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

let users = [];
//all routes in here are started with /users
router.get('/', (request, respond) => {
    respond.send(users);
}); 

console.log("change")

router.post('/', (request, respond) =>{

    const user = request.body;
    const ID = uuidv4();

    const userWithID = {...user, id: ID};
    users.push(userWithID);

    respond.send(`User with ID ${ID} added to the database!`);
});

router.get('/:id',(request, respond) =>{
    const {id} = request.params;

    const foundUser = users.find((user) => user.id == id);

    respond.send(foundUser);
});

router.delete('/:id', (request, respond) => {
    const {id} = request.params;

    users = users.filter((user) => user.id !== id); 

    respond.send(`User with ID ${id} delete from the database!`);
});

router.patch('/:id', (request, respond) => {
    const {id} = request.params;
    const { title, description } = request.body; 
    
    const updatedUser = users.find((user) => user.id == id)

    if(title) {updatedUser.title = title;}
    if(description) {updatedUser.description = description;}


    respond.send(`User with the ID ${id} has been updated!`);

});

export default router;
