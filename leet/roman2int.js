/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  let val = 0;

  for (let i = 0, length = s.length; i < length;) {
    const char = s[i];
    const nextChar = i + 1 < length ? s[i + 1] : null;

    switch (char) {
      case 'I':
        if (nextChar) {
          if (nextChar === char) {
            val += 2;
            i += 2;
            break;
          } else if (nextChar === 'V') {
            val += 4;
            i += 2;
            break;
          } else if (nextChar === 'X') {
            val += 9;
            i += 2;
            break;
          }
        }

        val += 1;
        i += 1;
        break;
      case 'V':
        val += 5;
        i += 1;
        break;
      case 'X':
        if (nextChar) {
          if (nextChar === char) {
            val += 20;
            i += 2;
            break;
          } else if (nextChar === 'L') {
            val += 40;
            i += 2;
            break;
          } else if (nextChar === 'C') {
            val += 90;
            i += 2;
            break;
          }
        }

        val += 10;
        i += 1;
        break;
      case 'L':
        val += 50;
        i += 1;
        break;
      case 'C':
        if (nextChar) {
          if (nextChar === char) {
            val += 200;
            i += 2;
            break;
          } else if (nextChar === 'D') {
            val += 400;
            i += 2;
            break;
          } else if (nextChar === 'M') {
            val += 900;
            i += 2;
            break;
          }
        }

        val += 100;
        i += 1;
        break;
      case 'D':
        val += 500;
        i += 1;
        break;
      case 'M':
        val += 1000;
        i += 1;
        break;
    }
  }

  return val;
};
