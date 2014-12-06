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
  arrayTest: function () {     
    console.log(this.myArray); 
    return type(this.myArray);
  },
  stringTest: function () {      
    console.log(this.myString); 
    return type(this.myString);
  },
  intTest: function () {      
    console.log(this.myInt); 
    return type(this.myInt);
  },
  booleanTest: function () {      
    console.log(this.myBoolean); 
    return type(this.myBoolean);
  }
});
