Meteor.startup(function() {
    if (CollectionIncludingArray.find().count() === 0)
    {        
    	CollectionIncludingArray.insert({title: "my-array-test", arrayField: ["123", "456", "789"]});
	}
});