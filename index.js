import { getInput, setFailed } from "@actions/core";
import { context, getOctokit } from "@actions/github";

try {
  const token = getInput("access-token");
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(context, undefined, 2);
  console.log(`The event payload: ${payload}`);
} catch (error) {
  setFailed(error.message);
}
