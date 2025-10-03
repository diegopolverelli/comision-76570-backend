const UsersManager = require('../dao/UsersManager.js');
const { resError } = require('../utils.js');

const Router=require('express').Router;
const router=Router()

router.get('/', async(req,res)=>{

    try {
        let usuarios=await UsersManager.getUsers()
        res.setHeader('Content-Type','application/json')
        res.status(200).json({usuarios})
    } catch (error) {
        resError(res, error)
    }

})


// module.exports={router}
module.exports=router