import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "src/samplechat.txt");

  const text = fs.readFileSync(filePath, {
    encoding: "utf8",
    flag: "r",
  });
  return res.status(200).json({ data: text });
}
