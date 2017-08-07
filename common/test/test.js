var assert = require('assert');
var calc = require('../index.js');

describe('Tests', function() {
	describe('Add two numbers', function() {
		it('should be equal to 2+2', function() {
			assert.equal(calc.add(2, 2), 4);
		});
	});
})