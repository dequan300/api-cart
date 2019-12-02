const express = require("express")

const cartRoutes=express.Router()
const pool= require("./connection")

let nextId=3

cartRoutes.get("/shopping-cart",(req,res)=>{
  let sql = "select * from shopping_cart"
  pool.query(sql).then(result=>{
    res.json(result.rows)
    res.status(200)
  })
    


cartRoutes.get("/shopping-cart/id",(req,res)=>{
 let param= [id]
  const id=parseInt(req.param.id)
  let sql= "select*from shopping_cart where id =$1 ::int"
  pool.query(sql,param).then(result=>{
    console.log(result.rows[0])
    if(result.rows.lenght!==0){
        res.json(result.rows[0])
    }else{
        res.status(404)
        res.send("no cart items")
    }
  })



});

});

cartRoutes.post("/shopping-cart",(req,res)=>{
    const aItem=req.body;
    aItem.id =nextId
    nextId++
    let sql= `insert into shopping_cart (product,price,quantity)
    values ($1::text,$2::int,$3::int)`;
    let param= [aItem.product,aItem.price,aItem.quantity]
    pool.query(sql,param).then(result=>{
      res.status(201);
      res.json(result.rows[0])

    })
    

});

cartRoutes.put("/shopping-cart/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const items = req.body;
    items.id = id;
    
    const index = shopping-cart.findIndex(i => i.id === id);

    cartItems.splice(index, 1,items);
    res.json(items);
  });


  cartRoutes.delete("/shopping-cart/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = cartItems.findIndex(i => i.id === id);
    if (index !== -1) {
      cartItems.splice(index, 1);
    }
    res.sendStatus(204);
  });



module.exports=cartRoutes;