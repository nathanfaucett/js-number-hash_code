module.exports = numberHashCode;


function numberHashCode(number) {
    var hash = number | 0;

    if (hash !== number) {
        hash ^= number * 0xFFFFFFFF;
    }

    while (number > 0xFFFFFFFF) {
        number /= 0xFFFFFFFF;
        hash ^= o;
    }

    return ((hash >>> 1) & 0x40000000) | (hash & 0xBFFFFFFF);
}
