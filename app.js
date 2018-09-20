const state = {
    employeeList: [
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
    ],
    activeList: []
}

const runFunction = function () {
    let e = state.employeeList;
    switch (databaseFunction) {
        case 'print':
            $('.displaycontent').html('');
            e.forEach(e => render(e));
            break;
        case 'verify':
            $('.displaycontent').html('');
            let verifyInput = $('.verifyInput').val();
            if (e.find(e => e.name.toLowerCase() === verifyInput.toLowerCase())) {
                render(e.find(e => e.name.toLowerCase() === verifyInput.toLowerCase()));
            } else {
                $('.displaycontent').html(`Employee Not Found`)
            }
            break;
        case 'lookup':
            $('.displaycontent').html('');
            let lookupInput = $('.lookupInput').val();
            if (e.find(e => e.name.toLowerCase () === lookupInput.toLowerCase())) {
                render(e.find(e => e.name.toLowerCase() === lookupInput.toLowerCase()));
            } else {
                $('.displaycontent').html(`Employee Not Found`)
            break;
            }
        case 'contains':
            $('.displaycontent').html('');
            let containEmployee = '';
            let containsInput = $('.containsInput').val();
            for (let i = 0; i < e.length; i++) {
                if (e[i].name.toLowerCase().includes(containsInput.toLowerCase())) {
                    containEmployee = `Name: ${e[i].name} Office Number: ${e[i].officeNum} Phone Number: ${e[i].phoneNum}`;
                    $('.displaycontent').append(`${containEmployee}`);
                }
            }
                if ($('.displaycontent').html() === '') {
                    $('.displaycontent').append(`No Employees Found<`)
                } 
                break;
                
        }
    }

const print = function () {
    databaseFunction = 'print';
    $('.welcome').addClass('hide');
    $('.lookupPage').addClass('hide');
    $('.verifyPage').addClass('hide');
    $('.printPage').addClass('hide');
    $('.containsPage').addClass('hide');
    $('.updatePage').addClass('hide');
    $('.addPage').addClass('hide');
    $('.deletePage').addClass('hide');
    runFunction();
}

const verifyPage = function () {
    $('.welcome').addClass('hide');
    $('.displaycontent').html('');
    $('.verifyPage').removeClass('hide');
    $('.printPage').addClass('hide');
    $('.lookupPage').addClass('hide');
    $('.containsPage').addClass('hide');
    $('.updatePage').addClass('hide');
    $('.addPage').addClass('hide');
    $('.deletePage').addClass('hide');
}

const verify = function () {
    databaseFunction = 'verify';
    runFunction();
}

const lookupPage = function () {
    $('.welcome').addClass('hide');
    $('.displaycontent').html('');
    $('.lookupPage').removeClass('hide');
    $('.verifyPage').addClass('hide');
    $('.printPage').addClass('hide');
    $('.containsPage').addClass('hide');
    $('.updatePage').addClass('hide');
    $('.addPage').addClass('hide');
    $('.deletePage').addClass('hide');
}

const lookup = function () {
    databaseFunction = 'lookup';
    runFunction();
}

const containsPage = function () {
    $('.welcome').addClass('hide');
    $('.displaycontent').html('');
    $('.containsPage').removeClass('hide');
    $('.verifyPage').addClass('hide');
    $('.printPage').addClass('hide');
    $('.lookupPage').addClass('hide');
    $('.updatePage').addClass('hide');
    $('.addPage').addClass('hide');
    $('.deletePage').addClass('hide');
}

const contains = function () {
    databaseFunction = 'contains';
    runFunction();
}

const render = function (e) {
    $('.displaycontent').append(`<div class="box"><h5>Name: ${e.name}</h5><h5>Office Number: ${e.officeNum}</h5><h5>Phone Number: ${e.phoneNum}</h5> </div>`);
}

$('#print').on('click', print);
$('#verify').on('click', verifyPage);
$('#verifyBtn').on('click', verify);
$('#lookup').on('click', lookupPage);
$('#lookupBtn').on('click', lookup);
$('#contains').on('click', containsPage);
$('#containsBtn').on('click', contains);