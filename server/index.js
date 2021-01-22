const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3977;
const portDb = 27017;
const {API_VERSION, IP_SERVER, PORT_DB} = require('./config');

mongoose.set("useUnifiedTopology", true);
mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/mernDb`, 
{useNewUrlParser: true}, (err,res)=> {
    if(err){
        throw err;
    } else {
        console.log("CONNECTION ESTABLISHED PROPERLY.");

        app.listen(port, () => {
            console.log("############################");
            console.log("######## API REST  #########");
            console.log("############################");
            console.log(`http://${IP_SERVER}:${port}/api/${API_VERSION}/`);

        });
    }
});


