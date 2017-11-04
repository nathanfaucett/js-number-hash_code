var Benchmark = require("benchmark"),
    numberHashCode = require("..");


var suite = new Benchmark.Suite();


suite.add("number hash code", function() {
    numberHashCode(123456789);
});

suite.add("immutable number hash code", function() {
    ImmutableNumberHashCode(123456789);
});

function ImmutableNumberHashCode(o) {
    if (o !== o || o === Infinity) {
      return 0;
    }
    var h = o | 0;
    if (h !== o) {
      h ^= o * 0xffffffff;
    }
    while (o > 0xffffffff) {
      o /= 0xffffffff;
      h ^= o;
    }
    return smi(h);
}

function smi(i32) {
  return ((i32 >>> 1) & 0x40000000) | (i32 & 0xbfffffff);
}

suite.on("cycle", function(event) {
    console.log(String(event.target));
});

suite.on("complete", function() {
    console.log("Fastest is " + this.filter("fastest").map("name"));
    console.log("=========================================\n");
});

console.log("\n= Number Hash Code ======================");
suite.run();
