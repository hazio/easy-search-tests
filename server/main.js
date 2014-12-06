Meteor.startup(function() {
	CollectionIncludingArray.remove({});
	CollectionIncludingArray.insert({title: "my-array-test", myArray: ["123", "456", "789"], myString:"123", myInt:1, myBoolean:true });
});