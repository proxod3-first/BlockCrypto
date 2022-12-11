$('.like-btn').on('click', function () {
    $(this).toggleClass('is-active');
});

var tp = document.getElementById("span4");
tp.innerHTML = "3";

$('.minus-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
    let temp = prompt("Сколько вычесть хотите?", '');
    if (value - parseInt(temp) >= 0) {
        value = value - parseInt(temp);
        $input.val(value);
        tp.innerHTML = parseInt(tp.innerHTML) - parseInt(temp);
    }
    else
        alert("Слишком мало!");
});

$('.plus-btn').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
    let temp = prompt("Сколько добавить хотите?", '');
    if (value + parseInt(temp) <= 100) {
        value = value + parseInt(temp);
        $input.val(value);
        tp.innerHTML = parseInt(tp.innerHTML) + parseInt(temp);
    }
    else
        alert("Слишком много!");
});


function handleFilter1() {
    console.log(document.getElementById("inputs1").value);
    tp.innerHTML = parseInt(tp.innerHTML) - parseInt(document.getElementById("inputs1").value);
    document.getElementById('cl_li1').innerHTML = '';
}
function handleFilter2() {
    console.log(document.getElementById("inputs2").value);
    tp.innerHTML = parseInt(tp.innerHTML) - parseInt(document.getElementById("inputs2").value);
    document.getElementById('cl_li2').innerHTML = '';
}
function handleFilter3() {
    console.log(document.getElementById("inputs3").value);
    tp.innerHTML = parseInt(tp.innerHTML) - parseInt(document.getElementById("inputs3").value);
    document.getElementById('cl_li3').innerHTML = '';
}
