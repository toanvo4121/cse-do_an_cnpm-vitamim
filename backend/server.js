const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config/db');
const MemberRoutes = require('./routes/member.route');
const UploadImg = require('./routes/upload.route');

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


const connectDB = async()=>{
        const conn = await mongoose.connect(config.DB,{useUnifiedTopology: true,useNewUrlParser: true,})
        .then( () => {console.log('Database is connected') },
        err => { console.log('Can not connect to the database'+ err)}
        );
}
connectDB()
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/Member', MemberRoutes);
app.use('/upload', UploadImg);




app.listen(PORT, function(){
  console.log('Server is running on Port:',PORT);
});