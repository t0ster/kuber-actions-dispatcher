import { getInput, setFailed } from "@actions/core";
import { context, getOctokit } from "@actions/github";

async function run() {
  try {
    const token = getInput("access-token");
    const octokit = getOctokit(token);
    const response = await octokit.request(
      "POST /repos/t0ster/kuber/actions/workflows/main.yml/dispatches",
      {
        ref: "master",
        inputs: { source: JSON.stringify(context) },
      }
    );
    console.log(response);

    // const payload = JSON.stringify(context, undefined, 2);
    // console.log(`The event payload: ${payload}`);
  } catch (error) {
    setFailed(error.message);
  }
}

run();
