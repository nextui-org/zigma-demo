/* eslint-disable no-console */
import fs from "fs/promises"; // Use fs/promises to support async/await with fs
import path from "path";
import {fileURLToPath} from "url";

import {transformToCss} from "@zigma.io/tokens-manager";

// FIXME: This is a temporary approach to sync the tokens from Zigma to the project for the first product demo.
// We should have a npm package that do this internally

const PROJECT_ID = "205388fd-5363-48de-b2a2-fceaad59d8bc";
const API_URL = `http://localhost:5001/api/v1/tokens/${PROJECT_ID}/pull-tokens`;

const filePath = path.join(process.cwd(), "src", "tokens.css");

let lastETag = "";

const PAT =
  "zigma_api_3QwR2zRck5KMdCeA85SGvHQesnm6jcwUsnD6qBdEkvf13hBRdnaL4oXR16Z1H85Eno3bDvyX4CSnf4Rw2oxzsNYZctJ6wtqGwhCWKGRDQtf2T7e162QLehkHKCijHgJfSUXFYud9kpEnhTomYjqmRLTXrMNRF5QTQooiF7BrsvoUfKS5vtdsZxfRVF1cmHg3v5fdCSbwuxgL7UhDm2P9LjqHGTsdtgsnqKujw341fs5cnimEiHyEtUC4HAALr6GSprztamVBVxJ1zeNAbp6TPBsY21XoYVpcRt1hgK1NRP8rY";

// Convert import.meta.url to a file path and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function checkForTokenUpdates() {
  try {
    const response = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${PAT}`,
        "If-None-Match": lastETag,
        "x-workspace-id": "a398d922-3ed5-490f-8771-69ae5883baf0",
      },
      method: "GET",
    });

    if (response.status === 304) {
      return;
    }

    if (response.ok) {
      const newETag = response.headers.get("ETag");

      if (newETag && newETag !== lastETag) {
        const tokensResponse = await response.json();

        lastETag = newETag;

        await saveTokensToFile(tokensResponse.data.tokens);
        console.log("Tokens updated and saved to file");
      }
    } else {
      console.error("Failed to fetch tokens:", response.status);
    }
  } catch (error) {
    console.error("Error checking for token updates:", error);
  }
}

async function saveTokensToFile(tokens) {
  const transformResult = await transformToCss(tokens);
  const cssContent = transformResult[0].output as string;

  try {
    // Ensure the directory exists
    await fs.mkdir(path.dirname(filePath), {recursive: true});

    await fs.writeFile(filePath, cssContent);
    console.log(`Tokens saved to ${filePath}`);
  } catch (error) {
    console.error("Error saving tokens to file:", error);
  }
}

setInterval(checkForTokenUpdates, 2000);
