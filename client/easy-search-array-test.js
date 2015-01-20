function type(obj){
    return Object.prototype.toString.call(obj).slice(8, -1);
}

UI.body.helpers({
  elasticSearchResults: function () {
    return Session.get("dataResults");  
  },
  elasticSearchSortAscResults: function () {
    return Session.get("ascSortDataResults");  
  },
  elasticSearchSortDescResults: function () {
    return Session.get("descSortDataResults");  
  }
});

UI.body.rendered = function() {

    EasySearch.search('test', "arraytest", function (err, data) {
        if (err) console.log(err.error);
        Session.set("dataResults", data.results);
    });
    EasySearch.changeProperty('sort_test', 'sort', 'asc');
    EasySearch.search('sort_test', "my-sorted-collection", function (err, data) {
        if (err) console.log(err.error);
        Session.set("ascSortDataResults", data.results);
    });
    EasySearch.changeProperty('sort_test', 'sort', 'desc');
    EasySearch.search('sort_test', "my-sorted-collection", function (err, data) {
        if (err) console.log(err.error);
        Session.set("descSortDataResults", data.results);
    });
}
Template.ascsortresult.helpers({
  order: function() {
    if (!UI.body.ascOrderNumber)
      UI.body.ascOrderNumber = 1;
    else
      UI.body.ascOrderNumber++
    return UI.body.ascOrderNumber;
  },

  testOrder: function(value) {
    return (value === UI.body.ascOrderNumber) ? 'pass' : 'fail';
  }
});

Template.descsortresult.helpers({
  order: function() {
    if (!UI.body.descOrderNumber)
      UI.body.descOrderNumber = Collection2.find().count();
    else
      UI.body.descOrderNumber--

    console.log("UI.body.descOrderNumber: " + UI.body.descOrderNumber);
    return UI.body.descOrderNumber;
  },

  testOrder: function(value) {
    return (value === UI.body.descOrderNumber) ? 'pass' : 'fail';
  }
});

Template.result.helpers({
  test: function(expect, object) {
    return (typeof object === expect) ? 'pass' : 'fail';
  },
  testArray: function(object) {
    return (object instanceof Array) ? 'pass' : 'fail';
  },

  mongoArray: function() {
    return Collection.findOne({}) ? type(Collection.findOne({}).myArray) : '';
  },
  mongoString: function() {
    return Collection.findOne({}) ? type(Collection.findOne({}).myString) : '';
  },
  mongoInt: function() {
    return Collection.findOne({}) ? type(Collection.findOne({}).myInt) : '';
  },
  mongoBoolean: function() {
    return Collection.findOne({}) ? type(Collection.findOne({}).myBoolean) : '';
  },
  mongoObject: function() {
    return Collection.findOne({}) ? type(Collection.findOne({}).myObject) : '';
  },
  mongoNull: function() {
    return Collection.findOne({}) ? type(Collection.findOne({}).myNull) : '';
  },
  mongoUndefined: function() {
    return Collection.findOne({}) ? type(Collection.findOne({}).myUndefined) : '';
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
