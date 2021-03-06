/**
 * Number.prototype.format(n, x, d, c, s, p)
 *
 * @param integer n: length of decimal
 * @param integer x: length of whole part
 * @param mixed   d: sections delimiter
 * @param mixed   c: decimal delimiter
 * @param mixed   s: currency symbol
 * @param boolean p: prepend currency symbol
 */

Number.prototype.cformat = function(n = 2, x = 3, d = '.', c = ',', s = '€ ', p = true) {
    let re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));

    let result = (s && p ? s : '') + (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (d || ',')) + (s && !p ? s : '');
    return result.replace(',00', ',-');
};
