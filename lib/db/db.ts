import fs from "fs";
import util from "util";
import { Blog } from "@/assets/data/blogs";
import { sleep } from "../utils";

const readFileAsync = util.promisify(fs.readFile);

const db = {
  blogs: {
    find: async () => {
      await sleep(1000);
      return JSON.parse(await readFileAsync("./lib/db/blogs.json", "utf-8")) as Blog[];
    },
  },
};

export default db;
