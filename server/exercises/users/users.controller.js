module.exports = function () {
    function query(req, res) {
        res.send([{name: 'Alessandro', email:'alecovre@alice.it'}]);
    }
    
    return {
        query: query,
    };
};