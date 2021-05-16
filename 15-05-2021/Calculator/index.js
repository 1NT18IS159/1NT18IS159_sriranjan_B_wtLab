var op1;
var op2;
var op;

function insert(num){
    document.form.textview.value=document.form.textview.value+num ;
}



function clean()
{
    document.form.textview.value="";
}


function add()
{
    op1 = parseInt(document.form.textview.value);
    console.log(op1);
    op = '+';
    clean();
}

function sub()
{
    op1 = parseInt(document.form.textview.value);
    console.log(op1);
    op = '-';
    clean();
}

function mul()
{
    op1 = parseInt(document.form.textview.value);
    console.log(op1);
    op = '*';
    clean();
}

function div()
{
    op1 = parseInt(document.form.textview.value);
    console.log(op1);
    op = '/';
    clean();
}

function mod()
{
    op1 = parseInt(document.form.textview.value);
    console.log(op1);
    op = '%';
    clean();
}

function po()
{
    op1 = parseInt(document.form.textview.value);
    console.log(op1);
    op = '^';
    clean();
}

function back(){
    var exp= document.form.textview.value ;
    document.form.textview.value =exp.substring(0,exp.length-1) ;
}

function equalto()
{
    op2 = parseInt(document.form.textview.value);
    console.log(op2);
    if (op === '+')
    {
        document.form.textview.value = op1+op2;
    }
    else if (op === '-')
    {
        document.form.textview.value = op1-op2;
    }
    else if (op === '*')
    {
        document.form.textview.value = op1*op2;
    }
    else if (op === '/')
    {
        document.form.textview.value = op1/op2;
    }
    else if (op === '%')
    {
        document.form.textview.value = op1%op2;
    }
    else if (op === '^')
    {
        document.form.textview.value = Math.pow(op1,op2);
    }

}