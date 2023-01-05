import express from 'express';
import { Request, Response, Application } from 'express';
import { BasePuppy, Puppy } from 'puppies/puppy.interface';
import * as PuppyService from './server';
const app: Application = express();

//test
app.get('/api/test', (_req: Request, res: Response) => {
  return res.status(200).json({ test: 'is working as it should' });
});

//get all puppies

app.get('/api/puppies',  async(_req: Request, res: Response) => {
try {
  const puppies: Puppy[] = await PuppyService.findAllPuppies();
  return res.status(200).json(puppies);
}
catch(err) {
  return res.send(500).send(err.message)
}
});



app.get('/api/puppies/:id', async(req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10);
console.log('id is:' , id)
const puppy:Puppy = await PuppyService.findById(id);

if(puppy) {
  res.status(200).send(puppy);
}
 })
//need to fix the body
 app.post('/api/puppies', async(req: Request, res: Response) => {
  try{

    const puppy: BasePuppy = req.body;
    const newPuppy = await PuppyService.createPuppy(puppy);
    console.log('new puppy is', newPuppy)
  res.status(201).json(newPuppy);
  }

  catch(err) {
    res.status(500).send(err.message)
  }
 });

app.put('/api/puppies/:id', async(req: Request, res: Response) => {
  const id:number = parseInt(req.params.id, 10)
console.log('being hit')
  // try{
    const puppyUpdate: Puppy = req.body;
    console.log(puppyUpdate)
const availablePuppy: Puppy = await PuppyService.findById(id);
const updatedPuppy = await PuppyService.updatePuppy(id, puppyUpdate)

// console.log(updatedPuppy)
return res.status(200).json(updatedPuppy);
  // }
})


app.delete('/api/puppies/:id', async (req: Request, res: Response) => {
  try {
    const id : number = parseInt(req.params.id, 10)
console.log('id is:' , id)
    await PuppyService.remove(id)
    res.status(204)
  } catch (error) {
    res.status(500).send(error.message)
  }
})

export default app;
