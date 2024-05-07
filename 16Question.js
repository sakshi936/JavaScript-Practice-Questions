// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and
// circumference of a circle(c = 2 x pi x r) where pi = 3.14.

const pi=3.14;

const r = prompt("enter radius");
// const r= 4;

    function area(r) {
      return r * r *pi;
    }

    function circum(r){
      return 2*pi*r;
    }
    console.log(` Area of circle: ${area(r)}`);
    console.log(` Circumference of circle: ${circum(r)}`);

