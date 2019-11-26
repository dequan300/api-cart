const express = require("express")

const cartRoutes=express.Router()

const  cartItems=[
   {id:0,product:"spider-man:ps3",price:20,quantity:1},
   {id:2,product:"fear:ps3",price:20,quantity:1}

];

let nextId=3

cartRoutes.get("./cartItems",(req,res)=>{
    res.json(cartItems)
    res.status(200)


cartRoutes.get("./cartItems/id",(req,res)=>{
 const id=parseInt(req.param.id)

});
let foundItem=cartItems.find(aItem=>aItem.id===id)
if(foundItem){
res.json(foundItem)

}else{
    res.status(404)
    res.send(`no items ${id}`)

}
});

cartRoutes.post("./cartItems",(req,res)=>{
    const aItem=req.body;
    aItem.id =nextId
    nextId++
    cartItems.push(aItem);
    res.status(201)
    res.json(aItem)

});

cartRoutes.put("/cartItems/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const items = req.body;
    items.id = id;
    
    const index = cartItems.findIndex(i => i.id === id);

    cartItems.splice(index, 1,items);
    res.json(items);
  });


  cartRoutes.delete("/cartItems/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const index = cartItems.findIndex(i => i.id === id);
    if (index !== -1) {
      cartItems.splice(index, 1);
    }
    res.sendStatus(204);
  });



module.exports=cartRoutes;