//  13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h). 


let b = prompt("Enter base : ");
    let h = prompt("Enter height: ");

    const area = (b, h) => {
      a = 0.5 * b * h;
      return a;
    };

    console.log(area(b, h));

