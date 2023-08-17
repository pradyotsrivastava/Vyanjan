const mongoose = require('mongoose');
const mongoURI='mongodb+srv://salsic21:Salsic321@cluster0.prczyvf.mongodb.net/food?retryWrites=true&w=majority'
mongoose.set('strictQuery',true)
const mongoDB = async() =>{
  try{ 
    await mongoose.connect(mongoURI);
    console.log("connected");
    let fetched_data = mongoose.connection.db.collection("food_item");
    let data = await fetched_data.find({}).toArray()
    const foodCategory = mongoose.connection.db.collection("foodCategory");
    let catData = await foodCategory.find({}).toArray()
    global.food_item = data;
    global.foodCategory = catData;
    
  }
  catch(error){
    console.log('err.',error);
    process.exit();
  }
};
module.exports = mongoDB;