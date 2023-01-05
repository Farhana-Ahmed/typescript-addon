import { Puppies } from 'puppies/puppies.interface';
import { BasePuppy, Puppy } from 'puppies/puppy.interface';
import app from './app';
const port = 3000;

//data model interfaces

//In memory database

let puppies: Puppies = {
  1: {
id: 1,
breed: 'abcd',
birthdate:'1-2-2017',
name:'dog1',
  },
  2: {
    id: 2,
    breed: 'efgh',
    birthdate:'1-2-2017',
    name:'dog2',  
      },
      3: {
        id: 3,
        breed: 'ijkl',
        birthdate:'1-2-2017',
        name:'dog3',
          },

}

app.listen(port, (): void => {
  console.log(`Example app listening on port ${port}`);
});

//service methods

export const findAllPuppies = async() : Promise<Puppy[]> => Object.values(puppies);
export const findById = async(id: number): Promise<Puppy> => puppies[id];

export const createPuppy = async (newPuppy : BasePuppy) : Promise <Puppy> => {
const id = new Date().valueOf();

puppies[id] = {
  id,
  ...newPuppy
  
}

return puppies[id];
}

export const updatePuppy = async(id: number,puppyUpdate : BasePuppy)
: Promise<Puppy | null> => {
const puppy = await findById(id);
console.log('from server ...' , puppy)

if(!puppy) {
return null;
}

puppies[id] = {...puppy, id}

return puppies[id];
}



