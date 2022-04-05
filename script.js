let divbody = document.createElement("div");
divbody.setAttribute("id","body1");
let title = creat("h1","title");
title.innerHTML="DOM Calculator"
let p = creat("p","description");
p.innerHTML="DOM  Simple calculator "
let formdiv =creat("div","divform");
formdiv.className="form";
let form=creat("form","form1");
form.className="form1";
form.setAttribute("name","form")
let displayinput=document.createElement("input");
displayinput.setAttribute("id","result");
displayinput.setAttribute("type","text");
displayinput.setAttribute("name","answerbox");
displayinput.setAttribute("placeholder","0");
// displayinput.setAttribute("disabled","true");

let input1=inp("1");
input1.addEventListener("click",(fun)=> {
    fun.preventDefault();
    form.answerbox.value += "1"});

let input2=inp("2");
input2.addEventListener("click",(fun)=>{
    fun.preventDefault();
    form.answerbox.value += "2"});

let input3=inp("3");
input3.addEventListener("click",(fun)=>{
    fun.preventDefault();
    form.answerbox.value += '3'});

let inputdivi=document.createElement("button");
inputdivi.setAttribute("id","divi");
inputdivi.className="button";
inputdivi.innerHTML="/";
inputdivi.addEventListener("click",(fun)=>{
    fun.preventDefault();
    form.answerbox.value += "/"});

let input4=inp("4");
input4.addEventListener("click",(fun)=>{
    fun.preventDefault();
    form.answerbox.value += '4'});

let input5=inp("5");
input5.addEventListener("click",(fun)=>{
    fun.preventDefault();
    form.answerbox.value += '5'});

let input6=inp("6");
input6.addEventListener("click",(fun)=>{
    fun.preventDefault();
    form.answerbox.value += '6'});

let inputmul=document.createElement("button");
inputmul.setAttribute("id","mul");
inputmul.className="button";
inputmul.innerHTML="*";
inputmul.addEventListener("click",(fun)=>{
    fun.preventDefault();
    form.answerbox.value += '*'});

let input7=inp("7");
input7.addEventListener("click",(fun)=>{
    fun.preventDefault();
    form.answerbox.value += '7'});

let input8=inp("8");
input8.addEventListener("click",(fun)=>{
    fun.preventDefault();
    form.answerbox.value += '8'});


let input9 = document.createElement("button");
input9.setAttribute("value","9");
input9.setAttribute("id","9");
input9.innerHTML="9";
input9.className="button";
input9.addEventListener("click",(fun)=>{
    fun.preventDefault();
    form.result.value += '9'});

let inputneg=document.createElement("button");
inputneg.setAttribute("id","subtract");
inputneg.className="button";
inputneg.innerHTML=" - ";
inputneg.addEventListener("click",(fun)=>{
    fun.preventDefault();
    form.answerbox.value += "-"});

let inputadd =document.createElement("button");
inputadd.setAttribute("id","add");
inputadd.className="button";
inputadd.innerHTML="+";
inputadd.addEventListener("click",(fun)=>{
    fun.preventDefault();
    form.answerbox.value += '+'});

let inputdot=inp(".");
inputdot.addEventListener("click",(fun)=>{
    fun.preventDefault();
    form.answerbox.value += "."});

let input=inp("0");
input.addEventListener("click",(fun)=>{
    fun.preventDefault();
    form.answerbox.value += '0'});

let inputeql=document.createElement("button");
inputeql.setAttribute("id","equal");
inputeql.innerHTML="=";
inputeql.className="button";

inputeql.addEventListener("click",(fun)=>{
    fun.preventDefault();

   

    form.answerbox.value = eval(form.answerbox.value);
    // checkInp();
} );

let clear=inp("clear");
clear.addEventListener("click",(fun)=>{
    fun.preventDefault();
    form.answerbox.value = '' });

    let dualzero=inp("00");
    dualzero.addEventListener("click",(fun)=>{
        fun.preventDefault();
        form.answerbox.value += '00'});


let del= inp("del");
del.addEventListener("click",(fun)=>{
    fun.preventDefault();
   
    form.answerbox.value = form.answerbox.value.slice(0,-1);

    })
    let per=inp("%");
    per.addEventListener("click",(fun)=>{
    fun.preventDefault();
    form.result.value = ((eval(form.result.value)/10000)*100).toFixed(2);
  
});



    
 






let b1 =creat("br","br1");
let b2=creat("br","br2");
let b3=creat("br","br3");
let b4=creat("br","br4");
let b5=creat("br","br5");
let b6=creat("br","br6");
let b7=creat("br","br7");
let b8=creat("br","br8");
let b9=creat("br","br9");











form.append(displayinput,b1,clear,del,inputdot,inputmul,b2,input7,input8,input9,inputdivi,b3,input4,input5,input6,inputneg,b4,input1,input2,input3,inputadd,b5,input,dualzero,per,inputeql)

formdiv.append(form);
divbody.append(title,p,b6,formdiv);
document.body.append(divbody);



function creat(tag,id){
let tem=document.createElement(tag);
tem.setAttribute("id",id);

return tem;
}


function inp(num){
    let tem1=document.createElement("button");
    tem1.innerHTML=num;
    tem1.setAttribute("id",num);
    tem1.setAttribute("value",num);
    tem1.className="button"; 
    return tem1;
}


function checkInp()
{

    // var x = document.form.result["isnform04"]["areinp"].value;
    // var regex = /^[0-9]+$/;
     var regex = [0-9]||"/"||"*"||"+"||"-";
    if (answerbox!==(regex))
    {
        alert(" input numbers only");
        return false;
    }
}

