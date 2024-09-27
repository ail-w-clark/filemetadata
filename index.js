var express = require('express');
var cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const multer = require('multer');


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

const fileSchema = new mongoose.Schema({
  name: { type: String, required:true },
  type: { type: String },
  size: { type: Number }
});

const File = mongoose.model('File', fileSchema);

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), async (req, res) => {
  const fileInfo = {
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  };

  const file = new File(fileInfo);

  try {
    await file.save();
    res.json(fileInfo);
  } catch (err) {
    res.json({ error: 'Error uploading file'})
  }
});

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
