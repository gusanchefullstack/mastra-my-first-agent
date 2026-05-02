import { Mastra } from "@mastra/core";

import { chefGustavo } from "./agents/chefGustavo";

export const mastra = new Mastra({
    agents: {chefGustavo}
});

