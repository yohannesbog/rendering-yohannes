
function renderCircles(circles) {
    // HINT: You probably need to write a for loop!
    //       Or, if you're feeling fancy, use .map() 
        return `
        ${circles.map(drawCircle).join("")}
    `
    

}
 
function drawCircle(circle) {
    return  `
    <div class="circle-box">
 <div class="circle">
   <div style="background-color: ${circle.color};
    height: ${circle.radius}px;
    width: ${circle.radius}px;
    border-radius: ${circle.radius}px;" >
    </div>

    </div>
 </div>
    `
}

function circles() {
    var content = document.getElementById('content');

    var circlesAbstraction = [
        {
            radius: 50,
            color: "#FF00FF"
        },
        {
            radius: 30,
            color: "#FF99AA"
        },
        {
            radius: 60,
            color: "#0000FF"
        },
        {
            radius: 10,
            color: "#000000"
        },
    ];

    content.innerHTML = renderCircles(circlesAbstraction);

}