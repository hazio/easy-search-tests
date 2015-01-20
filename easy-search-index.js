// Searching
Meteor.startup(function () {
    // on Client and Server
	EasySearch.createSearchIndex('test', {
		'collection'    : Collection,		// instanceof Meteor.Collection
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
	EasySearch.createSearchIndex('sort_test', {
		'collection'    : Collection2,		// instanceof Meteor.Collection
		'field'         : ['title'],    				// can also be an array of fields
		'limit'         : 10,                   		// default: 10
		'use' 			: 'elastic-search',
		'props' : {
    		'sort': 'asc'
  		},
		'sort' : function() {
			return { "myInt": {"order" : this.props.sort} };
		},
		'query' : function(searchString) {
			query = { "bool": { "must": [
				{ "match": { "title": searchString }},
			]}};            	
			return query;                                                                                                            
		}
	});
});