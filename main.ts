import { Application } from "./deps.ts";
import router from "./routes.ts";
// import { qrcode } from "./deps.ts";

const PORT = 3000;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: PORT });
console.log(`Deno server running on: http://localhost:${PORT}`);
