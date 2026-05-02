import { mastra } from "./mastra";
import { z } from "zod";

const chefGustavo = mastra.getAgent("chefGustavo");

const query = "I am in SOMA, which sushi restaurant do you recommend?";
console.log(`Query:  ${query}`);

// Response text
// const limitedResult = await chefGustavo.generate(query, {
//   modelSettings: {
//     maxOutputTokens: 300
//   },
// })
//
// console.log(`Response of Chef Gustavo \n:`, limitedResult.text)

// Response stream
const stream = await chefGustavo.stream(query, {
    modelSettings: {
        maxOutputTokens:300
    }
})

for await (const chunk of stream.textStream) {
    process.stdout.write(chunk)
}
console.log("\n\n Response complete!!")



