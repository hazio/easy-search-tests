function type(obj){
    return Object.prototype.toString.call(obj).slice(8, -1);
}

UI.body.helpers({
  results: function () {
    return Session.get("dataResults");  
  }
});

UI.body.events({
  'click #search' : function() {
    EasySearch.search('test', "my-array-test", function (err, data) {
        if (err) console.log(err.error);
        Session.set("dataResults", data.results);
    });
  }
})

Template.result.helpers({
  typeTest: function () {      
    return type(this.arrayField); // this should be Array, but is not
  }
});
