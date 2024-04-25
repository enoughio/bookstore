import expres from "express";
import pg from "pg";
import axios from "axios";

const app = expres();


app.use(expres.json());
app.use(expres.urlencoded({ extended: true }));
app.use(expres.static("public"));

//set database 
// const db = new pg.clint({
//   host = "localhost",
//   port = 5432,
//   database = "postgres",
//   user = "postgres",
//   password = "postgres"
// })

// db.connnect();

app.get(
  "/books", (req,res)=>{
    console.log("get request")
  })


app.listem(3000, () => {
  console.log("Servidor rodando!");
})