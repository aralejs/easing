
var $ = require('jquery');
var expect = require('expect.js');
require('../index.js');

describe('easing', function() {

    it('add easing function', function() {
        expect($.easing.linear).to.be.ok();
        expect($.easing.easeOutStrong).to.be.ok();
    });

});
