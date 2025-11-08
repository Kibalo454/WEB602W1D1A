const { PI } = Math; // private to this file

exports.area = (r) => PI * r * r;            // r^2
exports.circumference = (r) => 2 * PI * r;   // export it
