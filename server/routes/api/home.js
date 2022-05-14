const express = require('express');
const http2 = require('http2');
const isConnected = require('../../mainNet');
const session = require('express-session')
const { exec } = require("child_process");


let events = 
[
  {
    id: 1,
    name: 'Charity Ball',
    category: 'Fundraising',
    description: 'Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.',
    featuredImage: 'https://placekitten.com/500/500',
    images: [
      'https://placekitten.com/500/500',
      'https://placekitten.com/500/500',
      'https://placekitten.com/500/500',
    ],
    location: '1234 Fancy Ave',
    date: '12-25-2019',
    time: '11:30'
  },
  {
    id: 2,
    name: 'Rescue Center Goods Drive',
    category: 'Adoptions',
    description: 'Come to our donation drive to help us replenish our stock of pet food, toys, bedding, etc. We will have live bands, games, food trucks, and much more.',
    featuredImage: 'https://placekitten.com/500/500',
    images: [
      'https://placekitten.com/500/500'
    ],
    location: '1234 Dog Alley',
    date: '11-21-2019',
    time: '12:00'
  }
];


const home = (req,res) => {
    let x = isConnected.isConnected().then((e) =>{
        if(e == true){
            console.log("Connected")
            let conn = "Connected";
            // isConnected.mainWork();
            // console.log(req.session.speed)
            exec("fast --upload --json", (error, stdout, stderr) => {
              res.send(stdout);    
            })

            
        }
        else{
            // console.log("Not connected")
            res.send("Not Connected");
        }
    });
}


module.exports = {
    home
}