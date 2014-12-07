function type(obj){
    return Object.prototype.toString.call(obj).slice(8, -1);
}

UI.body.helpers({
  elasticSearchResults: function () {
    return Session.get("dataResults");  
  }
});

UI.body.rendered = function() {
    EasySearch.search('test', "my-array-test", function (err, data) {
        if (err) console.log(err.error);
        Session.set("dataResults", data.results);
    });
}

Template.result.helpers({
  test: function(expect, object) {
    return (typeof object === expect) ? 'pass' : 'fail';
  },
  testArray: function(object) {
    return (object instanceof Array) ? 'pass' : 'fail';
  },


  mongoArray: function() {
    return CollectionIncludingArray.findOne({}) ? type(CollectionIncludingArray.findOne({}).myArray) : '';
  },
  mongoString: function() {
    return CollectionIncludingArray.findOne({}) ? type(CollectionIncludingArray.findOne({}).myString) : '';
  },
  mongoInt: function() {
    return CollectionIncludingArray.findOne({}) ? type(CollectionIncludingArray.findOne({}).myInt) : '';
  },
  mongoBoolean: function() {
    return CollectionIncludingArray.findOne({}) ? type(CollectionIncludingArray.findOne({}).myBoolean) : '';
  },
  mongoObject: function() {
    return CollectionIncludingArray.findOne({}) ? type(CollectionIncludingArray.findOne({}).myObject) : '';
  },
  mongoNull: function() {
    return CollectionIncludingArray.findOne({}) ? type(CollectionIncludingArray.findOne({}).myNull) : '';
  },
  mongoUndefined: function() {
    return CollectionIncludingArray.findOne({}) ? type(CollectionIncludingArray.findOne({}).myUndefined) : '';
  },

  esArray: function () {     
    console.log(this.myArray); 
    return type(this.myArray);
  },
  esString: function () {      
    console.log(this.myString); 
    return type(this.myString);
  },
  esInt: function () {      
    console.log(this.myInt); 
    return type(this.myInt);
  },
  esBoolean: function () {      
    console.log(this.myBoolean); 
    return type(this.myBoolean);
  },
  esObject: function () {      
    console.log(this.myObject); 
    return type(this.myObject);
  },
  esNull: function () {      
    console.log(this.myNull); 
    return type(this.myNull);
  },
  esUndefined: function () {      
    console.log(this.myUndefined); 
    return type(this.myUndefined);
  }
});
