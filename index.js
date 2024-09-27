var express = require('express');
var cors = require('cors');
<<<<<<< HEAD
require('dotenv').config();
const mongoose = require('mongoose');
const multer = require('multer');


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
=======
require('dotenv').config()
>>>>>>> 49efa7a6bf3e68ffb8635c7d00253c2ec0342e63

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

<<<<<<< HEAD
const fileSchema = new mongoose.Schema({
  name: { type: String, required:true },
  type: { type: String },
  size: { type: Number }
});

const File = mongoose.model('File', fileSchema);

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

=======
>>>>>>> 49efa7a6bf3e68ffb8635c7d00253c2ec0342e63
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

<<<<<<< HEAD
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
=======


>>>>>>> 49efa7a6bf3e68ffb8635c7d00253c2ec0342e63

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
