import { getApp } from "../../rsc-module/server/index.js";
import Router from "../../src/server/components/router.js";
import HTML from "../../src/server/html.js";
import serverless from "serverless-http";

const app = getApp(Router, HTML);
const handler = serverless(app);
export { handler };
