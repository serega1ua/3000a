function greatestProduct(input) {
    let arr = input.split``.map((x,i,a) => a.length - i < 5 ? -Infinity : x * a[i+1] * a[i+2] * a[i+3]* a[i+4]);
    return   Math.max(...arr);
}