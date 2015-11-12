module.exports = function enableAuthentication(server) {

  var Fund = server.models.Fund;
  var Value = server.models.Value;

  Fund.create([
    {
      name:"Fund1"
    },{
      name:"Fund2"
    }
  ],function (err,funds) {
    if(err){
      console.log(err);
    }
    for (var i = 0; i < funds.length; i++) {
      for (var j = 0; j < 10; j++) {
        Value.create({
          name:"value"+j,
          createdAt:new Date,
          fundId: funds[i].id
        },function (err,value) {
          if(err){
            console.log(err);
          }
        })
      }
    }
  })
};
