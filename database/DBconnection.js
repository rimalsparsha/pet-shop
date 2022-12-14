const mongoose = require('mongoose');

const connectDB = async(DATABASE_URL) =>{

    try {
        
        const DB_OPTIONS ={
            dbName: 'PET_CARE_AND_SHOP',
        };

        await mongoose.connect(DATABASE_URL,DB_OPTIONS);
        console.log("Connection Sucessfully");

    }
    catch(error){

        console.log(error);

    }
}

module.exports = connectDB;