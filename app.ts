import express, { RequestHandler } from 'express';
import { Request, Response, Application } from 'express';
import { IPuppy } from 'interface';
import { ICreatePuppyReq } from 'puppies.model';
const app: Application = express();

//test
app.get('/api/test', (_req: Request, res: Response) => {
  return res.status(200).json({ test: 'is working as it should' });
});

let puppies: IPuppy[] = [{
  name:'dog1',
  id:'1',
  breed:'abc',
  birthdate:'12-02-2022'
},
{
  name:'dog2',
  id:'2',
  breed:'def',
  birthdate:'12-02-2022'
},
{
  name:'dog3',
  id:'3',
  breed:'ghi',
  birthdate:'12-02-2022'
}
]

//get all puppies
app.get('/api/puppies', (_req: Request, res: Response) => {
  return res.status(200).json(puppies);
});

//get puppy by id
app.get('/api/puppies/:id', (req: Request, res: Response) => {
  console.log('req id is:',typeof(req.params.id));
  // puppies.filter(p => p.id === req.params.id);
  return res.status(200).json(puppies.filter(p => p.id === req.params.id));
})

//post new puppy
// app.post('/api/puppies', (req: Request, res: Response) => {
// console.log(req.body)
//   const newPuppy =  IPuppy({
//     id: new Date().valueOf(),
//     name:req.body.name,
//     birthdate:req.body.birthdate,
//     breed:req.body.breed
//   })
// return res.status(200).json(puppies.push(newPuppy))
// })

//post new puppy

export const createPuppy : RequestHandler = (req: ICreatePuppyReq, res: Response) => {
// const lastPuppyIndex = puppies.length - 1;
// const lastId = puppies[lastPuppyIndex]?.id;
// const id = lastId + 1;
const id = new Date().valueOf();

const newPuppy: IPuppy = {
  ...req.body,
  id
}
return newPuppy;
// res.status(201).send(newPuppy);

}

app.post('/api/puppies', (req: ICreatePuppyReq, res: Response) => {
const id = new Date().valueOf();
console.log(req.body)
const newPuppy: IPuppy = {
  ...req.body,
  id
}
res.json(puppies.push(newPuppy));

})

export default app;
