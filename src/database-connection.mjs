import mongoose from 'mongoose';

mongoose.connect("mongodb://127.0.0.1:27017/E-Learning-APP")
  .then(
    () => console.log("DB Is connected"),
    err => {console.log(err);}
  );

export default mongoose;