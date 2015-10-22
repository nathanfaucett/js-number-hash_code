var tape = require("tape"),
    numberHashCode = require("..");


tape("numberHashCode(number: Number) should return hash code for number", function(assert) {
    assert.equals(numberHashCode(0), 0);
    assert.equals(numberHashCode(-32), -32);
    assert.equals(numberHashCode(1234.1234), 529996656);
    assert.equals(numberHashCode(1231), 1231);
    assert.equals(numberHashCode(1237), 1237);
    assert.end();
});
