const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const fileUpload = require("express-fileupload");
const vision = require("@google-cloud/vision");
const { Translate } = require("@google-cloud/translate").v2;

app.use(fileUpload());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3001, () => {
  console.log("App listening on port 3001!");
});

app.post("/extractText", async (req, res) => {
  
  console.log("HEREEE IN EXTRACT!");
  console.log(req.files);
  if (req.files === null) {
    console.log("NO FILE UPLOADED");
    return res.status(400).json({ msg: "No file uploaded" });
  }
  const file = req.files.photo;

  const client = new vision.ImageAnnotatorClient({
    keyFilename: "./key.json",
  });

  const [result] = await client.textDetection(file.data);
  const detections = result.textAnnotations;
  const extracted_text_language = detections[0].locale
  //console.log(detections[0].description);
  let edit_s = detections[0].description.split("\n");
  //console.log(edit_s[0]);
  let full_sentence = "";
  edit_s.forEach((element) => {
    full_sentence += element + " ";
  });

  //console.log("FULL", full_sentence);

  res.json({extractedText: full_sentence, language: extracted_text_language});
});

app.post("/translateText", async (req, res) => {

  console.log("HEREEE IN TRANSLATE!");

  let request_object = req.body;
  console.log(request_object)

  let input_text = request_object.text;
  let code = request_object.code;
  //console.log(req.body)

  const translate = new Translate({ keyFilename: './key.json'});
  const text = input_text;
  const target = code;

  const [translation] = await translate.translate(text, target);
  console.log(`Text: ${text}`);
  console.log(`Translation: ${translation}`);

  res.json({translatedText: translation});
});
