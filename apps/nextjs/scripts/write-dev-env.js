// @ts-check
import * as auth from "@acme/auth/scripts/dev-env.js";
import { addDevEnvToFile } from "@acme/scripts/dev-env.js";

const filePath = ".env.development.local";
const devEnv = {
  ...(await auth.getDevEnv()),
};

addDevEnvToFile({
  filePath,
  devEnv,
  source: "/apps/nextjs/scripts/write-dev-env.js",
}).catch((err) => {
  console.error(`Failed to write dev env variables to ${filePath}`, err);
  process.exit(1);
});
