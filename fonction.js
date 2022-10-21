function circleArea() {
    let radius = parseInt((document.getElementById('radius').value).trim());
    //console.log(radius);
    let res = Math.PI * (radius * radius);
    //console.log(res);
    document.getElementById('circle-area').value = res;
}


function triangleArea() {
    let b = parseInt((document.getElementById('base').value).trim());
    let h = parseInt((document.getElementById('v_height').value).trim());
    //console.log(b + "  " + h);
    let res = 0.5 * b * h;
    document.getElementById('triangle-area').value = res;
}

function squareArea() {
    let s = parseInt((document.getElementById('sq_side').value).trim());
    //console.log(radius);
    let res = s * s;
    //console.log(res);
    document.getElementById('square-area').value = res;
}

function rectangleArea() {
    let w = parseInt((document.getElementById('width').value).trim());
    let h = parseInt((document.getElementById('height').value).trim());
    //console.log(b + "  " + h);
    let res = w * h;
    document.getElementById('rectangle-area').value = res;

}