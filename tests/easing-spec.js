define(function(require) {

    var $ = require('$');
    var expect = require('expect');

    describe('easing', function() {

        it('add easing function', function() {
            expect($.easing.linear).to.be.ok();
            expect($.easing.easeOutStrong).to.not.be.ok();
            require('../src/easing');
            expect($.easing.easeOutStrong).to.be.ok();
        });

    });

});
