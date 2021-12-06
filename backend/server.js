const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/db');
const MemberRoutes = require('./routes/member.route');
const UploadImg = require('./routes/upload.route');
const path = require('path');

//load anh
// app.use(cors());
// const initRoutes = require("./routes/upload.route");
// app.use(express.urlencoded({ extended: true }));
// initRoutes(app);



mongoose.Promise = global.Promise;
// mongoose.connect(config.DB, { useNewUrlParser: true }).then(
//   () => {console.log('Database is connected') },
//   err => { console.log('Can not connect to the database'+ err)}
// );


const connectDB = async () => {
  const conn = await mongoose.connect(config.DB, { useUnifiedTopology: true, useNewUrlParser: true, })
    .then(() => { console.log('Database is connected') },
      err => { console.log('Can not connect to the database' + err) }
    );
}
connectDB()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/Member', MemberRoutes);
app.use('/upload', UploadImg);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(process.env.PORT || 5000)