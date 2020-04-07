const express = require("express");

const app = express();

const fileUpload = require("express-fileupload");
const vision = require("@google-cloud/vision");
const {Translate} = require('@google-cloud/translate').v2;




app.use(fileUpload());

app.listen(3001, () => {
  console.log("App listening on port 3001!");
});

app.post("/translateImage", async (req, res) => {
  console.log("HEREEE!");
  console.log(req.files);
  if (req.files === null) {
    console.log("NO FILE UPLOADED");
    return res.status(400).json({ msg: "No file uploaded" });
  }
  const file = req.files.photo

  //console.log(file.data);

  // file.mv(`${__dirname}/uploads/${file.name}`, err => {
  //   if (err) {
  //     console.log(err);
  //     return res.status(500).send(err);
  //   }
  // });


  const client = new vision.ImageAnnotatorClient({
    keyFilename: './key.json'
  });


  const [result] = await client.textDetection(file.data);
  const detections = result.textAnnotations;
  console.log(detections[0].description);
  let edit_s = detections[0].description.split('\n');
  console.log(edit_s[0]);
  let full_sentence = '';
  edit_s.forEach( (element) => {
    full_sentence += element + " "
  })
  
  
console.log(typeof detections[0].description)
console.log("FULL", full_sentence);

  const translate = new Translate({ keyFilename: './key.json'});
  const text = full_sentence
  const target = 'ne';

  const [translation] = await translate.translate(text, target);
  console.log(`Text: ${text}`);
  console.log(`Translation: ${translation}`);


  res.json({translatedText: translation});
});
