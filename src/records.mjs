import { studentModel, coursesModel } from './models.mjs';

const ahmedStudent = new studentModel({
  Name: "Ahmed",
  Age: 22,
  Phone: "123456789",
  Password: "aok23gor",
  Address: "ahemd203@gmail.com",
  Bio: "Ahmed is a student that are interested in learning new technology"
}).save();

const databaseCourse = new coursesModel({
  courseName: "Database",
  Lecturer: "Dr.Mahmoud Bakrey",
  Description: 
  "This course teaches you everything about database from connecting inserting data etc...",
}).save();