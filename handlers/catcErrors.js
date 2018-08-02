//catch and handle all the errors
//gotta be updated!!!!
exports.catchErrors = (fn) => {
return function(req,res,next){
     return  fn(req,res,next).catch(next)
}
}

//404
exports.ntFnd = (req,res,next)=>{
    req.flash('error','404 Page not found Your Now at Home!')
    res.redirect('/')
}

//flash errors
exports.flashes = (err,req,res,next)=>{
    if(!err)return next
    req.flash('error',err)
    console.log(err)
    res.render('Home',{body:req.body,flashes:req.flash()})
}