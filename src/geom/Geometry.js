verb.geom.Geometry = function() { 

	verb.geom.WatchObject.call(this);

	var id = verb.core.uid();
	this.GetUniqueId = function() {
		return id;
	};

}.inherits(verb.core.WatchObject);