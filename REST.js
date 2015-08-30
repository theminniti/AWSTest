var mysql   = require("mysql");

function REST_ROUTER(router,connection,md5) {
    var self = this;
    self.handleRoutes(router,connection,md5);
}

REST_ROUTER.prototype.handleRoutes = function(router,connection,md5) {
    var self = this;

    router.get("/",function(req,res){
        res.json({
            "Message" : "Hello World !",
            "data": [{
                "id": 1
            },{
                "id": 2
            }]
        });
    });

    router.get("/food",function(req,res){
        var query = "SELECT id, food FROM Test";
        var table = ["Test"];
        query = mysql.format(query,table);
        connection.query(query,function(err,rows){
            if(err) {
                res.json({"Error" : true, "Message" : "Error executing MySQL query"});
            } else {
                res.json({"Error" : false, "Message" : "Success", "Users" : rows});
            }
        });

    });
}

module.exports = REST_ROUTER;
