define(function(require) {

    var $ = require('$');
    var expect = require('expect');
    require('easing');

    describe('easing', function() {

        it('add easing function', function() {
            expect($.easing.linear).to.be.ok();
            expect($.easing.easeOutStrong).to.be.ok();
        });

    });

});
