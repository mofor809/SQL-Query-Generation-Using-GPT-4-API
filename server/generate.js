import openai from "./api.js";
import OpenAI from "openai";
const openai2 = new OpenAI();

const generate = async (queryDescription) => {
  try {
    const response = await openai2.chat.completions.create({
      model: "gpt-4o-mini", // ensure this is the correct model name
      messages: [
        { role: "system", content: "You are a helpful assistant, knowledgeable of SQL" },
        { role: "user", content: `Convert the following natural language description into an SQL query. Only provide the SQL query without any explantion, formatting, or code block markers: \n\n${queryDescription}.` }
      ],
      max_tokens: 100,
      temperature: 0.2
    });

    return response.choices[0].message.content

  } catch (error) {
    console.error('Error generating SQL query:', error);
    return `Error: ${error.message}`;
  }
};

export default generate;