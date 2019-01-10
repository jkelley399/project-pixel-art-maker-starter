// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

/*
2019-01-04 Learning for future
1.  <td> table data cell element bgcolor attribute essentially deprecated in HTML 5.
    Instead, use CSS background-color
2.  Place to start next:
    https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information
2019-01-07 Finally getting it working OK!
Learning for future
1.  Having trouble grabbing the values out of inputs
2.  Read:
    https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color
3.  Figured out that the problem I was having was not initializing and then
    updating the color value, so I added

        var chosenColor = "#000000";

    and then I added

        colorPicker.addEventListener("input", function () {
            chosenColor = event.target.value;
        });
*/

var colorInput = document.querySelector('#colorPicker');
var targetSubmitButton = document.querySelector("#sizePickerSubmitButton");
var targetDiv = document.querySelector("#pixelCanvas");
var inputForm = document.querySelector('#sizePicker');
var chosenColor = "#000000";

function makeGrid() {
    let inColor = inputForm.value;
    let inHt = inputForm.inputHeight.value;
    let inWh = inputForm.inputWidth.value;
    for(let i = 0; i < inHt; i++){
        console.log ("inHt = " + inHt);
        let newRow = document.createElement('tr');
        targetDiv.appendChild(newRow);
            for(let j = 0; j < inWh; j++){
                console.log ("inWh = " + inWh);
                let newCell = document.createElement('td');
                newRow.appendChild(newCell);
                //2019-01-04: Following line not working
                //newCell.style.backgroundColor = blue;
                newCell.innerHTML = i + ' txt ' + j;
                }
    }
}

//2019-01-04: Note syntax in the following, which accesses the event.target
function changeColor(evt) {
    console.log('A cell was clicked ' + evt.target.textContent);
    let inColor = inputForm.value;

    //2019-01-04: Actually a cool effect and works fine
    //2019-01-07: But it's essentially inline.
    // evt.target.style.visibility = 'hidden';

    //2019-01-07: Works, but it's essentially inline and hard-wired
    //evt.target.style.backgroundColor = 'lightblue';

    //2019-01-07: Not working; inColor variable not working
    evt.target.style.backgroundColor = chosenColor;

    //2019-01-04: Following line not working
    //evt.target.style.bgcolor = blue;

    //2019-01-04: Following line not working
    //evt.target.style.bgcolor = inColor;
}

//2019-01-04: Finally got this working partially, by changing function to simply
//"makeGrid" and not function makeGrid() or even makeGrid()

colorPicker.addEventListener("input", function () {
    chosenColor = event.target.value;
});

targetSubmitButton.addEventListener('click', makeGrid);

targetDiv.addEventListener('click', changeColor);

//targetSubmitButton.addEventListener('click', makeGrid);

// WORKING
// targetSubmitButton.addEventListener('click', function () {
//     let inHt = inputForm.inputHeight.value;
//     let inWh = inputForm.inputWidth.value;
//     for(let i = 0; i < inHt; i++){
//         let newRow = document.createElement('tr');
//         targetDiv.appendChild(newRow);
//             for(let j = 0; j < inWh; j++){
//                 let newCell = document.createElement('td');
//                 newRow.appendChild(newCell);
//                 newCell.innerHTML = i + ' , ' + j;
//                 }
//     }
// });


// targetSubmitButton.addEventListener('click', function () {
//     console.log("Submit button clicked.");
// });
