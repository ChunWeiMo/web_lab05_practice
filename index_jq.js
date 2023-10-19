function add() {
    x = $("#operand1").val();
    x = parseInt(x);
    console.log(x)

    y = $("#operand2").val();
    y = Number(y);
    console.log(y);

    $("#result").html("<b>" + (x + y) + "</b>");
}

function sub() {
    x = $("#operand1").val();
    x = parseInt(x);
    console.log(x)

    y = $("#operand2").val();
    y = Number(y);
    console.log(y);

    $("#result").html("<b>" + (x - y) + "</b>");
}

function mul() {
    x = $("#operand1").val();
    x = parseInt(x);
    console.log(x)

    y = $("#operand2").val();
    y = Number(y);
    console.log(y);

    $("#result").html("<b>" + (x * y) + "</b>");
}

function div() {
    x = $("#operand1").val();
    x = parseInt(x);
    console.log(x)

    y = $("#operand2").val();
    y = Number(y);
    console.log(y);

    $("#result").html("<b>" + (x / y) + "</b>");
}

function setup() {
    console.log("Lab05_calculator")
    console.log("setup function is called")

    $("#addbtn").click(add);
    $("#subbtn").click(sub);
    $("#mulbtn").click(mul);
    $("#divbtn").click(div);
}

$(document).ready(setup);



