//resolvers.ts

import { Collection, ObjectId } from "mongodb";
import { GraphQLError } from "graphql";
import { Character, House } from "./types.ts";
import { } from "./utils.ts";

const API_URL = "https://hp-api.onrender.com/api/characters"

let characters: Character[] = [];


async function Characters():Promise<Character[]>{
  if (characters.length > 0) return characters;
}

const res = await fetch(API_URL);

const data = await res.json();

const rawCharacters: Character[] = data.map((c: any, index: number) => {
  id: String (index + 1),
  name: c.name,
  alternate_names: c.alternate_names,
  species: c.species
  gender: c.gender
  house: c.house ? {name: c.house, characters: []}
})


export const resolvers = {
  Query: {
    getCharacter: (_: unknown, {id}: {id:string})=> {
      return Character.find((c) === id) ||null;
    }
    getCharacters(_: unknown, )
  },
};