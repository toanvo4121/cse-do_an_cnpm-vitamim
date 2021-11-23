const dotenv= require('dotenv');

//Import mongoose
const mongoose = require('mongoose');

// Import data
const member = require('./data/Member');
const templates = require('./data/Templates');

// Import Models
const memberModel = require('./models/Member');
const templatesModel = require('./models/TemplateModel');
const connectDB = require('./db.js')

dotenv.config();

// Connect to DB
mongoose.connect(connectDB.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

// Insert Data to DB
const importData = async () => {
  try {
    // await MimModel.deleteMany();
    await templatesModel.deleteMany(); // Clean Templates in DB
    await memberModel.deleteMany(); // Clean Members in DB

    await memberModel.insertMany(member); // Insert member to DB
    await templatesModel.insertMany(templates); // Insert Template to DB

    console.log('Data imported');
    process.exit();
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await templatesModel.deleteMany();
    await memberModel.deleteMany();

    console.log('Data destroyed');
    process.exit();
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
