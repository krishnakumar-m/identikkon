

function identikkon(str, options) {

var drawBox = function(i, x, y) {
  ctx.beginPath();
  ctx.fillStyle = (i == '1') ? colour1 : colour0;
  ctx.rect(x, y, unitx, unity);
  ctx.fill();
};

var options = options || {};
var unitx = options.unitx || 4,
colour1 = options.colour1 ||'Red',
colour0 = options.colour0 ||'Black';
var binstr = dec2bin(str.hashCode()).padLeft(32);
// Split 32 bits into strings of 8 bits each
var str = binstr.substr(0, 8);
var str2 = binstr.substr(8, 8);
var str3 = binstr.substr(16, 8);
var str4 = binstr.substr(24, 8);

// Create lines of 16 bits each, as ABCDEFGHHGFEDCBA
var pattern = [];
pattern.push(str + str.split('').reverse().join(''));
pattern.push(str2 + str2.split('').reverse().join(''));
pattern.push(str3 + str3.split('').reverse().join(''));
pattern.push(str4 + str4.split('').reverse().join(''));


var unity = unitx * 2;
var cvs = document.createElement('canvas');
var ctx = cvs.getContext('2d');

cvs.width = unitx * 16;
cvs.height = unity * 8;

var i,j,k;
// Top half
for (i = 0; i < 4; i++) {
  for (j = 0; j < 16; j++) {
    drawBox(pattern[i].charAt(j), unitx * j, unity * i);
  }
}

// Bottom is mirror image of top
for (k = 0; k < 4; k++) {
  for (j = 0; j < 16; j++) {
    i = 3 - k;
    drawBox(pattern[i].charAt(j), unitx * j, unity * k + cvs.height / 2);
  }
}
 return cvs;
}
