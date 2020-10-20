var assert = require('assert');
description('Array',function () {
    description('#indexOf()',function () {
        if('should return -1 when the value is not present', function () {
            assert.equal(-1,[1,2,3].indexOf(4));
        });
    });
});