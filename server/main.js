Meteor.startup(function() {
	Collection.remove({});
	Collection2.remove({});
	Collection.insert({
		title: "arraytest", 
		myArray: ["123", "456", "789"], 
		myString: "123", 
		myInt: 1, 
		myBoolean: true,
		myObject: {firstName: "123", lastname: "456"},
		myNull: null,
		myUndefined: undefined
	});

	Collection2.insert({
		title: "my-sorted-collection-1", 
		myInt: 1 
	});
	Collection2.insert({
		title: "my-sorted-collection-2", 
		myInt: 2 
	});
	Collection2.insert({
		title: "my-sorted-collection-3", 
		myInt: 3 
	});
	Collection2.insert({
		title: "my-sorted-collection-4", 
		myInt: 4 
	});
	Collection2.insert({
		title: "my-sorted-collection-5", 
		myInt: 5 
	});
	Collection2.insert({
		title: "my-sorted-collection-6", 
		myInt: 6 
	});
	Collection2.insert({
		title: "my-sorted-collection-7", 
		myInt: 7 
	});
});