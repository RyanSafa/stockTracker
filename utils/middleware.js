export const isLoggedIn  =  ((req,res,next) => {
    if(!req.isAuthenticated){
        res.redirect('/login')
    }
    else{
        next();
    }
})