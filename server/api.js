import { Configuration, OpenAIApi } from "openai"
import dotenv from "dotenv"
dotenv.config();

const openaiApiKey = process.env.OPEN_API_KEY

if (!openApiKey) {
  console.error('OPEN_API_KEY is not set')
  // closes backend if key is not set
  process.exit(1)
}

const configuration = new Configuration({
  apiKey: openaiApiKey
})
const openai = new OpenAIApi(configuration)

export default openai

//this configures api in a file. requests are made in another file