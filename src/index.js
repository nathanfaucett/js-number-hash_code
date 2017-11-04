module.exports = numberHashCode;


function numberHashCode(number) {
    var hash;

    if (number !== number || number === Infinity) {
        return 0;
    } else {
        hash = number | 0;

        if (hash !== number) {
            hash ^= number * 0xffffffff;
        }

        while (number > 0xffffffff) {
            number /= 0xffffffff;
            hash ^= number;
        }

        return smi(hash);
    }
}

function smi(i32) {
    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xbfffffff);
}
