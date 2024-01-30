const mongoose = require('mongoose');

let config = mongoose.connect('mongodb+srv://DiogoGomes:Diogoviana10@cluster0.de8i2.mongodb.net/Tasks', {useNewUrlParser: true}).then((success) => {
    console.log("sucess");
}).catch((error) => {
    console.log(error);
})

exports.config = config;
