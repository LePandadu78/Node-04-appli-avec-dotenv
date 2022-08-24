// const port = process.env.SERVER_PORT;
// server.listen(port);

require('dotenv').config() // this line is mandatory when you want to read variables from the '.env' file 
console.log(`I am ${process.env.MY_NAME}`);
console.log(`wilder in ${process.env.MY_CITY}`);
console.log(`and i love ${process.env.MY_LANGUAGE}`);