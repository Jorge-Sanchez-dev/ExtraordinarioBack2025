//Jorge Sánchez López
import { ApolloServer } from "@apollo/server";
import { MongoClient } from "mongodb";
import { startStandaloneServer } from "@apollo/server/standalone";
import { Character} from "./types.ts";
import { resolvers } from "./resolvers.ts";
import { typeDefs } from "./schema.ts";


const MONGO_URL = Deno.env.get("MONGO_URL");

if (!MONGO_URL) {
  throw new Error("Please provide a MONGO_URL. Actualizado");
}

const mongoClient = new MongoClient(MONGO_URL);
await mongoClient.connect();

console.info("Connected to MongoDB");

const mongoDB = mongoClient.db("ExamenExtraordinario");
const CharacterCollection = mongoDB.collection<Character>("ExamenOrdinario");

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const { url } = await startStandaloneServer(server, {
  context: async () => ({ CharacterCollection }),
});

console.info(`Server ready at ${url}`);


