import { Router } from "./deps.ts";
import { qrcode } from "./deps.ts";

const router = new Router();

router
  .get("/", (ctx) => {
    ctx.response.body = "Hello world!";
  })
  .post("/", async (ctx) => {
    const { dataToEncode } = await ctx.request.body().value;
    const base64Image = await qrcode(dataToEncode);

    ctx.response.body = `<img src="${base64Image}" />`;
  });

export default router;
