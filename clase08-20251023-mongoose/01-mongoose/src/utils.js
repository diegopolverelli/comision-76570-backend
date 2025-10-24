export const responseError=(error, res)=>{
    console.log(error)
    res.setHeader('Content-Type','application/json');
    return res.status(500).json({error:`Internal Server Error`})
}