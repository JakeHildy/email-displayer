import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  const { emailContent } = req.body;
  try {
    writeStringToEmailFile(emailContent);
    res.status(201).send({ message: "Html Written to" });
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.listen(6666, () =>
  console.log("Server is running on port http://localhost:6666")
);

const writeStringToEmailFile = (string) => {
  fs.writeFile("index.html", string, (err) => {
    if (err) throw err;
    console.log("The string was successfully written to email.html!");
  });
};
