const employeeList = [
    {
        name: 'Jan',
        officeNum: 1,
        phoneNum: '222-222-2222'
    },
    {
        name: 'Juan',
        officeNum: 304,
        phoneNum: '489-789-8789'
    },
    {
        name: 'Margie',
        officeNum: 789,
        phoneNum: '789-789-7897'
    },
    {
        name: 'Sara',
        officeNum: 32,
        phoneNum: '222-789-4654'
    },
    {
        name: 'Tyrell',
        officeNum: 3,
        phoneNum: '566-621-0452'
    },
    {
        name: 'Tasha',
        officeNum: 213,
        phoneNum: '789-766-5675'
    },
    {
        name: 'Ty',
        officeNum: 211,
        phoneNum: '789-766-7865'
    },
    {
        name: 'Sarah',
        officeNum: 345,
        phoneNum: '222-789-5231'
    }
];

let databaseFunction = '';

const runFunction = function (e) {
    e.preventDefault();
    switch (databaseFunction){
        case 'print':
            render('print');
            employeeList.forEach(e => renderEmployee(e));
            break;
    }
}

//     if (databaseFunction === 'print') {
//         let htmlStr = '';
//         for (let i = 0; i < employeeList.length; i++) {
//             htmlStr += `<div class="print"><p> ${employeeList[i].name} </p>`;
//             htmlStr += `<p> ${employeeList[i].officeNum} </p>`;
//             htmlStr += `<p> ${employeeList[i].phoneNum} </p>`;
//             htmlStr += `<p> ----- </p></div>`;
//         }
//         render(htmlStr);
//     } else if (databaseFunction === 'verify') {
//         let htmlStr = '<div class="print"><p> Employee Not Found </p></div>';
//         for (let i = 0; i < employeeList.length; i++) {
//             if (employeeList[i].name.toLowerCase() === $('#input').val().toLowerCase()) {
//                 htmlStr = '<div class="print"><p> Employee Found </p></div>';
//             }
//         }
//         render(htmlStr);
//     }
//     else if (databaseFunction === 'lookup') {
//         let htmlStr = '';
//         let lookup = false;
//         for (let i = 0; i < employeeList.length; i++) {
//             if (employeeList[i].name.toLowerCase() === $('#input').val().toLowerCase()) {
//                 htmlStr += `<div class="print"><p> ${employeeList[i].name} </p>`;
//                 htmlStr += `<p> ${employeeList[i].officeNum} </p>`;
//                 htmlStr += `<p> ${employeeList[i].phoneNum} </p></div>`;
//                 lookup = true;
//             }
//         }
//         if (lookup === false) {
//             htmlStr += `<p>Employee Not Found</p>`;
//         }
//         render(htmlStr);
//     } else if (databaseFunction === 'contains') {
//         let htmlStr = '';
//         let containsEmployee = false
//         for (let i = 0; i < employeeList.length; i++) {
//             if (employeeList[i].name.toLowerCase().includes($('#input').val().toLowerCase())) {
//                 htmlStr += `<div class="print"><p> ${employeeList[i].name} </p>`;
//                 htmlStr += `<p> ${employeeList[i].officeNum} </p>`;
//                 htmlStr += `<p> ${employeeList[i].phoneNum} </p>`;
//                 htmlStr += `<p> ----- </p></div>`;
//                 containsEmployee = true
//             }
//         }
//         if (containsEmployee === false) {
//             htmlStr += `<p>No Employee Match</p>`;
//         }
//         render(htmlStr);
//     } else if (databaseFunction === 'update') {
//         let htmlStr = '';
//         for (let i = 0; i < employeeList.length; i++) {
//             if (employeeList[i].name.toLowerCase() === $('#input').val().toLowerCase()) {
//                 employeeList[i].officeNum = $('#office').val();
//                 employeeList[i].phoneNum = $('#phone').val();
//                 htmlStr += `<div class="print"><p> ${employeeList[i].name} </p>`;
//                 htmlStr += `<p> ${employeeList[i].officeNum} </p>`;
//                 htmlStr += `<p> ${employeeList[i].phoneNum} </p></div>`;
//             }
//         }
//         render(htmlStr);
//     } else if (databaseFunction === 'add') {
//         let htmlStr = '';
//         const newEmployee = {
//             name: $('#input').val(),
//             officeNum: $('#office').val(),
//             phoneNum: $('#phone').val()
//         }

//         employeeList.push(newEmployee);

//         for (let i = 0; i < employeeList.length; i++) {
//             htmlStr += `<div class="print"><p> ${employeeList[i].name} </p>`;
//             htmlStr += `<p> ${employeeList[i].officeNum} </p>`;
//             htmlStr += `<p> ${employeeList[i].phoneNum} </p>`;
//             htmlStr += `<p> ----- </p></div>`;
//         }
//         render(htmlStr);
//     } else if (databaseFunction === 'delete') {
//         let htmlStr = '';
//         for (let i = 0; i < employeeList.length; i++) {
//             if (employeeList[i].name.toLowerCase() === $('#input').val().toLowerCase()) {
//                 employeeList.splice(i, 1);
//             }
//         }
//         for (let i = 0; i < employeeList.length; i++) {
//             htmlStr += `<div class="print"><p> ${employeeList[i].name} </p>`;
//             htmlStr += `<p> ${employeeList[i].officeNum} </p>`;
//             htmlStr += `<p> ${employeeList[i].phoneNum} </p>`;
//             htmlStr += `<p> ----- </p></div>`;
//         }
//         render(htmlStr);
//     } else if (databaseFunction === 'alphabetize') {
//         let htmlStr = '';
//         employeeList.sort(function (a, b) {
//             var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
//             if (nameA < nameB)
//                 return -1
//             if (nameA > nameB)
//                 return 1
//             return 0
//         })
//         for (let i = 0; i < employeeList.length; i++) {
//             htmlStr += `<div class="print"><p> ${employeeList[i].name} </p>`;
//             htmlStr += `<p> ${employeeList[i].officeNum} </p>`;
//             htmlStr += `<p> ${employeeList[i].phoneNum} </p>`;
//             htmlStr += `<p> ----- </p></div>`;
//         }
//         render(htmlStr);
//     }
// }

const render = function (htmlStr) {
    $('#render').html(htmlStr);
}

const hideForm = function () {
    $('form').removeClass('show')
}

const showForm = function () {
    $('form').addClass('show');
}

const addInput = function () {
    $('#input, #submit').addClass('show');
}

const hideInput = function () {
    $('#input, #submit').removeClass('show');
}

const addFields = function () {
    $('#office, #phone').addClass('show');
}

const removeFields = function () {
    $('#office, #phone').removeClass('show');
}

const hidePrint = function () {
    $('.print').addClass('hide');
}

const print = function (event) {
    databaseFunction = 'print';
    runFunction(event);
    removeFields();
    hideInput();
    hideForm();
}

const verify = function (event) {
    databaseFunction = 'verify';
    hidePrint();
    addInput();
    removeFields();
    showForm();
}

const lookup = function (event) {
    databaseFunction = 'lookup';
    hidePrint();
    addInput();
    removeFields();
    showForm();
}

const contains = function () {
    databaseFunction = 'contains';
    hidePrint();
    addInput();
    removeFields();
    showForm();
}

const update = function () {
    databaseFunction = 'update';
    hidePrint();
    addInput();
    addFields();
    showForm();
}

const add = function () {
    databaseFunction = 'add';
    hidePrint();
    addInput();
    addFields();
    showForm();
}

const remove = function () {
    databaseFunction = 'delete';
    hidePrint();
    addInput();
    removeFields();
    showForm();
}

const alphabetize = function (event) {
    databaseFunction = 'alphabetize';
    runFunction(event);
    removeFields();
    hideInput();
    hideForm();
}

$('#print').on('click', print);
$('#verify').on('click', verify);
$('#lookup').on('click', lookup);
$('#contains').on('click', contains);
$('#update').on('click', update);
$('#add').on('click', add);
$('#delete').on('click', remove);
$('button').on('click', runFunction);



// let command = '';

// const runCommand = function (e) {
//     e.preventDefault();
//     switch (command) {
//         case 'print':
//         console.log('printing');
//             // employeeList.forEach(e => renderEmployee(e));
//             break;
//         case 'lookup':
//         console.log('verifying');
//             break;


//         // const render = function (htmlString) {
//         // $('employeeData').html(htmlString);
//     }



// const print = function(){
//     command = 'print';
//     $('input').removeClass('show');
// }

// const verify = function(){
//     command = 'verify';
//     $('input').addClass('show');
// }


// $('#print').on('click', print);
// $('#verify').on('click', verify);
// $('#submit').on('click', runCommand);

// //print--------------------------------- 
// const print = function (event){
//     event.preventDefault();
//     $('#boxOne').empty();
//     for (let i = 0; i < employeeList.length; i++){
//         $('#boxOne').append(
//             `<p>${employeeList[i].name}</p>
//             <br>${employeeList[i].officeNum}</br>
//             <br>${employeeList[i].phoneNum}</br>
//             <br></br>`
//         );
//     }
// }

// $('#print').on('click', print);


// //verify-----------------------was working fine Sunday, now input box not appearing!
// const verify = function (event){
//     event.preventDefault();
//     $('#boxOne').empty();
//     $('#boxOne').append(`<br><input type='text' id='userVerify'></br>`);
//     $('#boxOne').append(`<button id="submitVerify">Verify</button>`);

//     $('#submitVerify').on('click', userVerify);
// }

// const userVerify = function(event){
//     event.preventDefault();
//     if(employeeList.some(e => e.name.toLowerCase() === $('#userVerify').val().toLowerCase()) === true){
//         $('#boxTwo').append(`<div>Employee Found</div>`);
//     } else {
//         $('#boxTwo').append('<div>Employee Not Found</div>');
//     }    
// }

// $('#verify').on('click', verify);


// //lookup----------------------------------not working yet
// const lookup = function (event){
//     event.preventDefault();
//     $('#boxOne').empty();
//     $('#boxOne').append(
//         `<br><input id='userLookup' type='text' placeholder='Employee Name' autocomplete="off" />
//         <button id='submitLookup'>Lookup</button>
//         </br>`
//     );

//     $('#submitLookup').on('click', userLookup);
// }

// const userLookup = function(event){
//     event.preventDefault();
//     for (i = 0; i < employeeList.length; i++){
//         if ($('#userLookup') === employeeList[i].name.toLowerCase() === true){
//             $('#boxTwo').append(
//                 `<p>${employeeList[i].name}</p>
//                 <br>${employeeList[i].officeNum}</br>
//                 <br>${employeeList[i].phoneNum}</br>
//                 <br></br>`
//             )
//         } else {
//             $('#boxTwo').append('<div>Employee Not Found</div>');
//         }
//     }
// }

// $('#lookup').on('click', lookup);


//contains----------------------------------Act30code
// else if (command.toLowerCase() === 'contains'){

// const inputString = prompt('enter a string to list employees');

// for (i = 0; i < employeeList.length; i++){
//     if (employeeList[i].name.toLowerCase().includes(inputString)){
//     render(employeeList[i].name);
//     render(employeeList[i].officeNum);
//     render(employeeList[i].phoneNum); 
//     }
// }
// }


//update----------------------------------Act30code
// else if (command.toLowerCase() === 'update'){

// const updateName = prompt('enter an employee name to update');
// const updateField = prompt('enter officeNum or phoneNum to update');
// const newValue = prompt('enter a value to update');

// for (let i = 0; i < employeeList.length; i++){
//     if (updateName === employeeList[i].name.toLowerCase()){
//     if (updateField === "officeNum"){
//         employeeList[i].officeNum = newValue;
//     }
//     else if (updateField === "phoneNum"){
//         employeeList[i].phoneNum = newValue;
//     }
//     render(employeeList[i].name);
//     render(employeeList[i].officeNum);
//     render(employeeList[i].phoneNum); 
//     }
// }
// }


//add----------------------------------incomplete/not working
// const addInput = function(event){
//     event.preventDefault();
//     $('#boxOne').empty();
//     $('#boxOne').append(
//         `<br>Name <input id="userAddName" type="text" placeholder="Type New Employee Name" autocomplete="off" /></br>
//         <br>Office Number <input id="userAddOffice" type="text" placeholder="Type New Office Number" autocomplete="off" /></br>
//         <br>Phone Number <input id="userAddPhone" type="text" placeholder="Type New Phone Number" autocomplete="off" /></br>
//         <br><button id="submitAdd">Add</button></br>
//         </br>`
//     );

//     $('#submitAdd').on('click', userAdd);
// }


//delete----------------------------------Act30code
// else if (command.toLowerCase() === 'delete'){

// const deleteEmployeeName = prompt('enter the name of an employee to delete');
// const index = -1;

// for (i = 0; i < employeeList.length; i++){
//     if (employeeList[i].name.toLowerCase() === deleteEmployeeName){
//     index = i;
//     }
// }

// employeeList.splice(index, 1);
//     for (i = 0; i < employeeList.length; i++){
//     render(employeeList[i].name);
//     render(employeeList[i].officeNum);
//     render(employeeList[i].phoneNum);
//     }
// }







// CJ's code from help session

// let command = '';

// const runCommand = function (event) {
//     event.preventDefault();
//     switch (command) {
//         case 'print':
//             let htmlString = '';
//             for (let i = 0; i < employeeList.length; i++) {
//                 htmlString += `<p>${employeeList[i].name}</p>`;
//                 htmlString += `<br>${employeeList[i].officeNum}</br>`;
//                 htmlString += `<br>${employeeList[i].phoneNum}</br>`;
//             }  
//             render(htmlString);
//         break;
//         case 'verify':
//                 $('#boxOne').append(
//                     `<br><input id="userVerify" type="text" placeholder="Employee Name" autocomplete="off" />
//         <button id="submitVerify">Verify</button>
//         </br>`
//                 );

//                 $('#submitVerify').on('click', userVerify);
//             }


//             const message = false;

//             for (i = 0; i < employeeList.length; i++){
//             if (verify === employeeList[i].name.toLowerCase()){
//             message = true;
//             }
//             }

//             render(message);
//         break;
//     }
// }

// const render = function (htmlString) {
//     $('employeeData').html(htmlString);
// }

// const print = function (event) {
//     event.preventDefault();
//     command = 'print';
//     $('input').removeClass('show');
// }

// const verify = function (event) {
//     event.preventDefault();
//     command = 'verify';
//     $('input').addClass('show');
// }