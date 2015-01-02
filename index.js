module.exports = function(source) {
	var swig  = require('swig');
	return swig.compile(source);
}
