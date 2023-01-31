const container = document.querySelector("#container");
const COLORCLASSES = document.getElementsByClassName('color');
const RESETBTN = document.getElementById('resetbtn');
let color = 'black';

// Set isMouseDown to be false by default
let isMouseDown = false;

container.addEventListener("mousedown", function() {
    // If mousedown on container element set to true
  isMouseDown = true;
});

container.addEventListener("mouseup", function() {
    // If mouseup on container element set to false
  isMouseDown = false;
});

container.addEventListener("mouseover", function(event) {
    // If mouseover on container and mousedown and the box you are hovering over contains the class 'box', change background to red 
  if (isMouseDown && event.target.classList.contains(currentBoxSize)) {
    event.target.style.backgroundColor = color;
  }
});

container.addEventListener("click", function(event) {
    if (event.target.classList.contains(currentBoxSize)) {
        event.target.style.backgroundColor = color;
      }
});

// When reset button is clicked run handleGeneration function
RESETBTN.addEventListener('click', function() {
    handleGeneration(thisMany);
});


//-----------------------------------------------------------------------------------------------
const INPUTOPTION = document.querySelector('#input-value');
//const INPUTVALUE = document.querySelector('#input-text');

let currentBoxSize;

let thisMany = INPUTOPTION.value;
generateBoxes(parseInt(thisMany), "boxSize1");

INPUTOPTION.addEventListener('input', function() {
    //INPUTVALUE.textContent = INPUTOPTION.value;
    thisMany = parseInt(INPUTOPTION.value);
    handleGeneration(thisMany);
});

function generateBoxes(size, boxSize) {
    // First delete any children this container might already have
    removeChildren();
    // Then create (size) amount of boxes and append them to the container div
    for (let i = 1; i <= size; i++) {
        const element = document.createElement("div");
        element.classList.add(boxSize);
        container.appendChild(element);
    }
    currentBoxSize = boxSize;
}

function removeChildren()
{
    let removeThis = container.lastElementChild;
    while (removeThis)
    {
        container.removeChild(removeThis);
        removeThis = container.lastElementChild;
    }
}

function handleGeneration(size)
{
    if (parseInt(size) == 500)
    {
        //container.style.width = "550px";
        generateBoxes(size, "boxSize1");
    }
    else if (parseInt(size) == 2500)
    {
        //container.style.width = "550px";
        generateBoxes(size, "boxSize2");
    }
    else
    {
        //container.style.width = "550px";
        generateBoxes(size, "boxSize3");
    }
}

for (let i = 0 ; i < COLORCLASSES.length; i++)
{
    COLORCLASSES[i].addEventListener('click', function() {
        removeColorChosen();
        color = COLORCLASSES[i].id;
        currentColor = document.getElementById(color);
        currentColor.classList.add('color-chosen');
    });
}

function removeColorChosen()
{
    for (let i = 0; i < COLORCLASSES.length; i++)
    {
        COLORCLASSES[i].classList.remove('color-chosen');
    }
}