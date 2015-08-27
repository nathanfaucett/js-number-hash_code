var tape = require("tape"),
    numberHashCode = require("..");


tape("numberHashCode(number: Number) should return hash code for number", function(assert) {
    assert.equals(numberHashCode(0), 0);
    assert.end();
});
