module.exports = function (req, res, next){
    var ip = req.headers['x-forwarded-for'].split('.');
    if(ip[3] % 2 === 1) return next();
    res.statusCode(400).send('Fuck');
};