String.prototype.hashCode = function() {
  var hash = 0,
    i, chr, len;
  if (this.length === 0) return hash;
  for (i = 0, len = this.length; i < len; i++) {
    chr = this.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0;
  }
  return hash;
};

String.prototype.padLeft = function(n, str) {
  return Array(n - String(this).length + 1).join(str || '0') + this;
}

function dec2bin(dec) {
  return (dec >>> 0).toString(2);
}
