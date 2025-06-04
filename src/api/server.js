
import postRouter from "./routes/post.routes.js"
import appRouter from "./routes/app.routes.js"
import express from "express"
import cors from 'cors';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// export test from "./routes/testo.route.js"



const PORT =  3000;
const app = express()

const corsOpts = {
    origin: '*'
}

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.use(express.static('blogger'));
app.use(cors(corsOpts));
// Serve static files from the frontend directory
app.use(express.static(path.resolve("src/frontend")));
// Serve images from the public folder outside the root
app.use('/public', express.static(path.resolve(__dirname, '../../public')));
//app.use(appRouter);
app.use(postRouter);



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});



// if server breaks again try specifying location more EX: node api/server.js

// sql for the post model thing for indivueal rows EX: SELECT * FROM "Post" WHERE id = 5 would just give row 5

// sql thing for remove button eventually EX: DELETE FROM "Post" WHERE id = 11;

// sql thing for inserting data EX: INSERT INTO "Post"(id,title,content,description) VALUES (11,'title 11','content 11','desc 11')

// Note also need to make way for each post to have numbered id in ascending order so they dont break everything

// Note try to find a less half assed felling way of showing all the blogs indivually

// when trying to get number in ascending order automatically like the ex above serial is the data type to use


// indiv 1 is a
// indiv 2 is b 
// indiv 3 is e
// indiv 4 is f
// indiv 5 is c
// indiv 6 is g 
// indiv 7 is h
// indiv 8 is i 
// indiv 9 is j
// indiv 10 is k
// indiv 11 is 
// indiv 12 is 
// indiv 13 is 
// indiv 14 is 
// indiv 15 is 
// indiv 16 is 
// indiv 17 is 
// indiv 18 is  
// indiv 19 is 

// React alerts: icons
//React Progress
//React navbar section under forms is search bar ex