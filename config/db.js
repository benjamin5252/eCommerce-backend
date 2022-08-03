import mongoose from "mongoose";

const connectDB = async ()=>{
        
        try{
            mongoose.connect(process.env.MONGO_URI)
            mongoose.Promise = global.Promise;
            let db = mongoose.connection;
            //  db.on('error', console.error.bind(console, 'MongoDB connection error:'));
            
            db.on('error', console.error.bind(console, 'connection error:'));
            db.once('open', () => {
            console.log("Database Connected.");
            });
        }catch(error){
            console.log("MongodbError: " + error)
            process.exit(1);
        }
         

   
}

export default connectDB;
