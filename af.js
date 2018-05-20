var arr = [

    {
        "name": "TestTask",
        "date": "12/01/ 2012",
        "assigned": "JohnDoe"
    },
    {
        "name": "TestTask",
        "date": "12/02/ 2012",
        "assigned": "JohnDoe"
    },
    {
        "name": "TestTask",
        "date": "12/03/ 2012",
        "assigned": "JohnDoe"
    },
    {
        "name": "TestTask",
        "date": "12/04/ 2012",
        "assigned": "JohnDoe"
    },
    {
        "name": "TestTask",
        "date": "12/05/ 2012",
        "assigned": "JohnDoe"
    },
    {
        "name": "TestTask",
        "date": "12/06/ 2012",
        "assigned": "JohnDoe"
    },
    {
        "name": "TestTask",
        "date": "12/07/ 2012",
        "assigned": "JohnDoe"
    },
]


var createtable; 
function loop() {
    createtable = ""

    console.log(arr.length)
    createtable += `<h2>Existing tasks</h2>
                <div style="border:3px solid grey"><table class="table table-striped" >`
    for (var i = 0; i < arr.length; i++) {
        createtable += `<tr>
        <td>${arr[i].name}</td>
        <td>${arr[i].date}</td>
        <td>${arr[i].assigned}</td>
        </tr>`
    }
    createtable += `</table></div>`
    document.getElementById('data').innerHTML = createtable;

}
loop()

document.getElementById('btn').addEventListener('click', happen)

function happen() {
    var a = {};
    a.name = document.getElementById('name').value
    a.date = document.getElementById('dated').value
    a.assigned = document.getElementById('assigned').value
    arr.push(a)
    console.log(arr)
    loop()

}