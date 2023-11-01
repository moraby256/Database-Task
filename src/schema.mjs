import mongoose from './database-connection.mjs';

const studentSchema = new mongoose.Schema({
  Name: String, 
  Age: Number,
  Phone: String,
  Password: String,
  Address: String,
  Bio: String
});

const coursesSchema = new mongoose.Schema({
  courseName: String,
  Lecturer: String,
  Description: String  
});

export { studentSchema, coursesSchema };