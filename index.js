// import {courseData} from './new-module.js'

let courses = document.getElementById("courses");
let display = document.getElementById("display");
let form = document.getElementById("form");

let option1 = document.createElement("option");
let option2 = document.createElement("option");
let option3 = document.createElement("option");
let option4 = document.createElement("option");
let option5 = document.createElement("option");
let option6 = document.createElement("option");
let option7 = document.createElement("option");

console.log("me");

option1.innerHTML = "Desktop Publishing";
option2.innerHTML = "Electronics";
option3.innerHTML = "Web Development";
option4.innerHTML = "Computer Hardware Repairs and Maintenance";
option5.innerHTML = "kids Code";
option6.innerHTML = "Graphics Design";
option7.innerHTML = "Digital Marketing";

courses.appendChild(option1);
courses.appendChild(option2);
courses.appendChild(option3);
courses.appendChild(option4);
courses.appendChild(option5);
courses.appendChild(option6);
courses.appendChild(option7);

myFunction();

function myFunction() {
  // let form1 = form.value
  let courseSelected = courses.value;
  let opt1 = option1.value;
  let opt2 = option2.value;
  let opt3 = option3.value;
  let opt4 = option4.value;

  let hasLaptopInfo = document.createElement("p");
  hasLaptopInfo.innerHTML = "";
  let anotherBr = document.createElement("br");

  form.innerHTML = "";

  let para = document.createElement("p");
  para.innerText = "Do you have a computer";

  let yes = document.createElement("label");
  yes.innerText = "Yes";
  let inputYes = document.createElement("input");

  inputYes.type = "radio";
  inputYes.name = "option";

  inputYes.onclick = (e) => {
    if (e.target.checked) {
      hasLaptopInfo.innerHTML = `
        <div>
          <p>Specify Type</p>
          <input type="text" required />
        </div>
      `;
    }
  };

  let breakLine = document.createElement("br");

  let no = document.createElement("label");
  no.innerText = "No";
  let inputNo = document.createElement("input");
  inputNo.type = "radio";
  inputNo.name = "option";

  inputNo.onclick = (e) => {
    if (e.target.checked) {
      hasLaptopInfo.innerHTML = "";
    }
  };

  let para2 = document.createElement("p");
  para2.innerText = "Mode of learning";
  let Yes = document.createElement("label");
  Yes.innerText = "Yes";
  let InputYes = document.createElement("input");
  InputYes.type = "radio";
  InputYes.name = "option2";

  let BreakLine = document.createElement("br");

  let No = document.createElement("label");
  No.innerText = "No";
  let InputNo = document.createElement("input");
  InputNo.type = "radio";
  InputNo.name = "option2";

  form.appendChild(para);
  form.appendChild(inputYes);
  form.appendChild(yes);
  form.appendChild(breakLine);
  form.appendChild(inputNo);
  form.appendChild(no);
  form.appendChild(anotherBr);
  form.appendChild(hasLaptopInfo);
  form.appendChild(para2);
  form.appendChild(InputYes);
  form.appendChild(Yes);
  form.appendChild(BreakLine);
  form.appendChild(InputNo);
  form.appendChild(No);

  if (courseSelected === opt3) {
    let para3 = document.createElement("p");
    para3.innerText = "Framework to learn";
    let react = document.createElement("label");
    react.innerText = "React";
    let inputReact = document.createElement("input");
    inputReact.type = "radio";
    inputReact.name = "option3";

    let breakLine1 = document.createElement("br");

    let angular = document.createElement("label");
    angular.innerText = "Angular";
    let inputAngular = document.createElement("input");
    inputAngular.type = "radio";
    inputAngular.name = "option3";

    form.appendChild(para3);
    form.appendChild(inputReact);
    form.appendChild(react);
    form.appendChild(breakLine1);
    form.appendChild(inputAngular);
    form.appendChild(angular);
  }
}
