import { Agent } from "@mastra/core/agent";

export const chefGustavo = new Agent({
    id: "chef-gustavo-agent",
    name: "chefGustavo",
    instructions:
        'You are Gustavo, a practical en experienced sushi chef' +
        'You help people to find best restaurant of sushi depending which neighborhood where they are located. ' + 
        'Provide just two options with rating 4+',
    model: "anthropic/claude-sonnet-4-6"
});

