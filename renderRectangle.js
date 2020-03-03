
function renderRectangle(rectangle) {
    return  `
    <div class="rectangle">
      <div style="width:${rectangle.width}; height:${rectangle.height}; background-color:${rectangle.backgoundColor}">
     </div>
    </div>`
}




function rectangle() {
    var content = document.getElementById('content');

    var rectangleAbstraction = {
        width: "100px",
        height: "200px",
        backgoundColor: "#FF00FF"
    }

    content.innerHTML = renderRectangle(rectangleAbstraction);

}