import { mastra } from "./mastra";

const chefGustavo = mastra.getAgent("chefGustavo");

const query = "I am in Potrero Hill, which sushi restaurant do you recommend?";
console.log(`Query:  ${query}`);

const limitedResult = await chefGustavo.generate(query, {
  modelSettings: {
    maxOutputTokens: 250,
    temperature: 0.7,
  },
})

console.log(`Response of Chef Gustavo \n:`, limitedResult.text)