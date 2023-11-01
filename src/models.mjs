import { studentSchema, coursesSchema } from './schema.mjs';
import mongoose from './database-connection.mjs';

const studentModel = mongoose.model("student", studentSchema);
const coursesModel = mongoose.model("courses", coursesSchema);

export { studentModel, coursesModel };