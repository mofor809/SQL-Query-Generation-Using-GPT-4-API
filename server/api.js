import dotenv from "dotenv";

dotenv.config();

import openaiPkg from "openai";

const { Configuration, OpenAIApi } = openaiPkg;

const openaiApiKey = process.env.OPENAI_API_KEY;

if (!openaiApiKey) {
  console.error('OPENAI_API_KEY is not set');
  // closes backend if key is not set
  process.exit(1);
}

const openai = new openaiPkg({
  apiKey: openaiApiKey,
});



export default openai;

//this configures api in a file. requests are made in another file