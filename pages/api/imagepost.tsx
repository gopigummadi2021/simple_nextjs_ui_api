import formidable from "formidable";
import fs from "fs";


export const config = {
  api: {
    bodyParser: false
  }
};

const post = async (req: any, res: any) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async function (err, fields, files: any) {
    let path = await saveFile(files.myfile);
    return res.status(200).json({ path: path });
  });
};

const saveFile = async (file: any) => {
  const data = fs.readFileSync(file.filepath);
  fs.writeFileSync(`./public/srv/${file.originalFilename}`, data);
  await fs.unlinkSync(file.filepath);
  return file.originalFilename;
};

export default (req: any, res: any) => {
  req.method === "POST"
    ? post(req, res)
    : req.method === "PUT"
      ? console.log("PUT")
      : req.method === "DELETE"
        ? console.log("DELETE")
        : req.method === "GET"
          ? console.log("GET")
          : res.status(404).send("");
};
