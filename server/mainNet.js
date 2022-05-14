const { exec } = require("child_process");
// const req = require("express/lib/request");
const http2 = require('http2');
const session = require('express-session');
const res = require("express/lib/response");

function isConnected() {
    return new Promise((resolve) => {
      const client = http2.connect('https://www.google.com');
      client.on('connect', () => {
        resolve(true);
        client.destroy();
      });
      client.on('error', () => {
        resolve(false);
        client.destroy();
      });
    });
  };

async function mainWork(){



    // let x = isConnected().then((e) =>{
    //     if(e == true){
    //         console.log("Connected")
        await exec("fast --upload --json", (error, stdout, stderr) => {
            // if (error) {
            //     console.log(`error: ${error.message}`);
            // }
            // if (stderr) {
            //     console.log(`stderr: ${stderr}`);
            //     setTimeout(() => {
            //         mainWork();
            //     }, 5000);
            //     return stderr;
            // }
            console.log(`stdout: ${stdout}`);
            // res.send(stdout)
            
            // req.session.speed = stdout
            return stdout;
            mainWork()
        });
        // }
    //     else{

    //         setTimeout(() => {
    //             console.log("Not connected")
    //             mainWork();
    //         }, 5000);
    //     }
    // });



}



module.exports = {
    mainWork,
    isConnected
}


// mainWork()