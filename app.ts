import express from "express";
import { Request, Response, Application } from "express";
// import { IPuppy } from "interface";

import cors from "cors";

import {
  // ICreatePuppyReq,
  IDeletePuppyReq,
  IGetPuppyReq,
  IUpdatePuppyReq,
} from "puppies.model";
import validateParams from "./validateParams";
import { getImage } from "./config/getImage";
import { IPuppy } from "interface";
const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//test
app.get("/api/test", (_req: Request, res: Response) => {
  return res.status(200).json({ test: "is working as it should" });
});

let puppies: IPuppy[] = [
  {
    name: "dog1",
    id: 1,
    breed: "Pitbull",
    birthdate: "12-02-2022",
  },
  {
    name: "dog2",
    id: 2,
    breed: "Labrador Retriever",
    birthdate: "12-02-2022",
  },
  {
    name: "dog3",
    id: 3,
    breed: "Dalmatian",
    birthdate: "12-02-2022",
  },
  {
    name: "dog4",
    id: 4,
    breed: "Pug",
    birthdate: "12-02-2022",
  },
];

const validatorObject: IPuppy = {
  name: "some string",
  breed: "some string",
  birthdate: "some string",
};

type AuthenticationRequest = Request & { body: IPuppy };

//get all puppies
app.get("/api/puppies", async (_req: IGetPuppyReq, res: Response) => {
  const query = puppies.map((item) => item.breed);

  for (let i = 0; i < query.length; i++) {
    const images = await getImage(query[i]);
    // console.log(images);
  }

  return res.status(200).json(puppies);
});

//get puppy by id
app.get("/api/puppies/:id", async (req: IGetPuppyReq, res: Response) => {
  let puppyById = puppies.filter((p) => p.id == Number(req.params.id));
  const query = puppyById.map((item) => item.breed);
  // console.log(query)
  const image = await getImage(query);
  const resp = puppyById.map((item) => ({ ...item, image: image }));

  return res.status(200).json(resp);
});

//creating a new puppy
app.post("/api/puppies", (req: AuthenticationRequest, res: Response) => {
  const id = new Date().valueOf();

  //see later
  if (!validateParams(req.body, validatorObject)) {
    return res.status(400).send({ error: "Invalid body" });
  }
  const newPuppy: IPuppy = {
    ...req.body,
    id,
  };
  puppies.push(newPuppy);
  return res.status(201).json(puppies); //{ message: "created successfully" }
});

//update a puppy
app.put("/api/puppies/:id", (req: IUpdatePuppyReq, res: Response) => {
  const { id } = req.params;
  const { name, birthdate, breed } = req.body;
  if (!name || !birthdate || !breed) {
    return res.status(400).send({ error: "Enter a valid body" });
  }
  const updateIndex = puppies.find((p) => p.id === Number(id));

  if (!updateIndex) {
    return res.status(404).send({ error: "Puppy with this id not found" });
  }

  const puppy = puppies.find(puppy => puppy.id === Number(id))
 
  if(puppy) {
    puppy.name = name,
    puppy.breed = breed,
    puppy.birthdate = birthdate

  }
  return res.status(200).json(puppy);
});

//deleting a puppy
app.delete("/api/puppies/:id", (req: IDeletePuppyReq, res: Response) => {
  const delIndex = puppies.findIndex((p) => p.id === Number(req.params.id));
  puppies.splice(delIndex, 1);
  return res.status(204).send(puppies);
});

export default app;
