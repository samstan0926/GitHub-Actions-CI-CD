import db from "../config/connection.js";
import Question from "../models/Question.js";


import pythonQuestions from './pythonQuestions.json' with { type: "json" };

db.once('open', async () => {


  await Question.insertMany(pythonQuestions);

  console.log('Questions seeded!');
  process.exit(0);
});
