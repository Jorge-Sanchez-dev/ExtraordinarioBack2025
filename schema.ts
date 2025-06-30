//schema.ts

export const typeDefs = `#graphql

type Character = {
  id: string;
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: House | null;
};
 
type House = {
  name: string;
  characters: Character[];
};

type Query {
    getCharacter(id: string): Character | null
    getCharacters(ids: string[]): Character[]
}
`;