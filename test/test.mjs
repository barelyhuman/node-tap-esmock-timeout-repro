import t from "tap";
import esmock from "esmock";

t.test("init", async () => {
  t.test("test demo", async () => {
    const mod = await esmock("../app.mjs", {
      "../utils/fetch.mjs": {
        default: () => ({
          items: ["yo"],
        }),
      },
    });
    t.ok(mod);
  });
});
