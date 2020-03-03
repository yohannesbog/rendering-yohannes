
function renderStudents(students) {
    return `
    <div class="text-center mt-5">
    Roll
    </div>
            ${students.map(stud).join('')}
    `
}

function stud(ger){
    var pres = '<h1 style="background-color: yellow;">Present</h1>'
    var pres2 = '<h1 style="background-color: red;">Absent</h1>'

    return `
    <div class="text-center mt-5">
    <div class="stud-box">
    <h1 class="std-name">${ger.name} </br>${ger.isPresent? pres : pres2}</h1>
    </div>
    </div>
    `
}

function students() {
    var content = document.getElementById('content');

    var studentsAbstraction = [
        {
            name: "Kamilah",
            isPresent: true
        },
        {
            name: "Kim",
            isPresent: true
        },
        {
            name: "Stuart",
            isPresent: false
        },
        {
            name: "Ron",
            isPresent: true
        },
        {
            name: "Krissy",
            isPresent: false
        }
    ]

    content.innerHTML = renderStudents(studentsAbstraction);
}