const mongoose = require('mongoose');
(express = require('express')), (app = express());

const port = process.env.PORT || 3000;

mongoose.connect(
  'mongodb://localhost:27017/Activities');

// Create a Schema object
const activitySchema = new mongoose.Schema({
  activity: { type: String, required: true },
});

// This Activitry creates the collection called activitimodels
const Activitymodel = mongoose.model('Activity', activitySchema);

app.get('/', async (req, res) => {
  const task1 = new Activitymodel({
    activity: 'activity 1',
  });

  await Activitymodel.insertMany([task1]);

  res.send(`<h1>Collection  Added</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
