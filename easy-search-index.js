// Searching
Meteor.startup(function () {
    // on Client and Server
	EasySearch.createSearchIndex('test', {
		'collection'    : CollectionIncludingArray,		// instanceof Meteor.Collection
		'field'         : ['title'],    				// can also be an array of fields
		'limit'         : 10,                   		// default: 10
		'use' 			: 'elastic-search',
		'query' : function(searchString) {
			query = { "bool": { "must": [
            	{ "match": { "title": searchString }},
        	]}};            	
			return query;                                                                                                            
		}
	});
});