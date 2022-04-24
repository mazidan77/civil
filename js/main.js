const form1 = document.querySelector("#form1");
const form2 = document.querySelector("#form2");
const form3 = document.querySelector("#form3");
const form4 = document.querySelector("#form4");
const form5 = document.querySelector("#form5");
const select = document.querySelector("select");
const ppp = document.querySelector(".ppp");
let buttonm2 = document.querySelector(".dismosatah")
let buttonm3 = document.querySelector(".dismokab")


var element1 = document.getElementById("display")
var element = document.getElementById("display1")
buttonm2.onclick = function(eo){
 buttonm2.classList.add("bricks")
 buttonm3.classList.remove("bricks")
// element1.classList.toggle("mosatah")
element1.classList.remove("mosatah")
element.classList.add("mokab")
if  (element1.classList.remove("mosatah")){
   element.classList.add("mokab")
  
}
 
}
buttonm3.onclick = function(eo){
   buttonm3.classList.add("bricks")
   buttonm2.classList.remove("bricks")
   // element.classList.toggle("mokab")
   element.classList.remove("mokab")
   element1.classList.add("mosatah")
if  (element.classList.remove("mokab")){
   element1.classList.add("mosatah")
  
}
 
}


// form1.onsubmit =(e)=>{
//     e.preventDefault()
//    let inputone =document.querySelector("#one-input").value
//    let submitone =document.querySelector("#one-submit")
//    let p1 =document.querySelector(".p1")
//    let p2 =document.querySelector(".p2")
//    let p3 =document.querySelector(".p3")
// let weightOfOneMeter =Math.round(((inputone*inputone)/162)*1000)/1000
// let weightOf12m = weightOfOneMeter*12
// let numeber = Math.round(1000/weightOf12m)
// p1.innerHTML =`${weightOfOneMeter}=وزن المتر الطولي ل حديد قطر  ${inputone}`
// p2.innerHTML =`${weightOf12m} وزن السيخ طوله 12 متر هو `
// p3.innerHTML =`  ${numeber} =عدد الاسياخ في الطن  `
// inputone = " "
// }

select.addEventListener("input", updateValue);
function updateValue(e) {
  let inputone = document.querySelector("#one-input").value;
  ppp.classList.add("p-one");
  let p1 = document.querySelector(".p1");
  let p2 = document.querySelector(".p2");
  let p3 = document.querySelector(".p3");
  let weightOfOneMeter =
    Math.round(((inputone * inputone) / 162) * 1000) / 1000;
  let weightOf12m = weightOfOneMeter * 12;
  let numeber = Math.round(1000 / weightOf12m);
  p1.innerHTML = `${weightOfOneMeter}=وزن المتر الطولي ل حديد قطر  ${inputone}`;
  p2.innerHTML = `${weightOf12m} وزن السيخ طوله 12 متر هو `;
  p3.innerHTML = `  ${numeber} =عدد الاسياخ في الطن  `;
  inputone = " ";
}

form2.onsubmit = (e) => {
  e.preventDefault();
  let inputone = document.querySelector("#big-span").value;
  let inputtwo = Math.round(
    document.querySelector("#free-hieght").value * (1 / 6)
  );
  let p1 = document.querySelector(".p4");
  if (inputone > inputtwo && inputone > 50) {
    p1.innerHTML = ` ${inputone} يتم التكثيف علي مسافه`;
  } else if (inputtwo > inputone && inputtwo > 50) {
    p1.innerHTML = ` ${inputtwo}يتم التكثيف علي مسافه`;
  } else {
    p1.innerHTML = `  50 يتم التكثيف علي مسافه `;
  }

  console.log(inputtwo);
};

form3.onsubmit = (e) => {
  e.preventDefault();
  let thickness = document.querySelector("#thickness").value;
  let cover = document.querySelector("#cover").value;
  let down = document.querySelector("#down").value / 10;
  let up = document.querySelector("#up").value / 10;
  let watar = document.querySelector("#watar").value / 10;
  let p1 = document.querySelector(".p5");
  // let result =(thickness - ((2*cover)-(2*down)-(2*up)-watar))
  let result = thickness - 2 * cover - 2 * down - 2 * up - watar;
  let finalresult = Math.round(result * 1000) / 1000;
  p1.innerHTML = `${finalresult}`;
};
form4.onsubmit = (e) => {
  e.preventDefault();
  let tooleltoba = (parseFloat(document.querySelector("#tobatool").value)+1)/100;
  let somlkeltoba= (parseFloat(document.querySelector("#tobasomk").value)+1)/100;
  let walltool= parseFloat(document.querySelector("#walltool").value);
  let wallheight= parseFloat(document.querySelector("#wallheight").value);
  let result =Math.round((walltool*wallheight/(tooleltoba*somlkeltoba))*1.05) 
  let cement = 150*result/1000
  let water = cement/2
  let sand = 0.5*result/1000
  let p1 = document.querySelector(".p6");
  let p2 =document.querySelector(".p7");
  let p3 =document.querySelector(".p8");
  let p4 = document.querySelector(".p9");
 console.log(cement)
  p1.innerHTML = `${result } = عدد الطوب بعد حساب نسبه الهالك `;
  p2.innerHTML = ` ${cement } =  كميه الاسمنت اللازمه بال كجم `;
  p3.innerHTML = ` ${ water } =  كميه المياه اللازمه بال باللتر `;
  p4.innerHTML = ` ${ sand } =  كميه الرمل اللازمه بال بالمتر `;
};
form5.onsubmit = (e) => {
   e.preventDefault();
   let tooleltoba = (parseFloat(document.querySelector("#tobatoolm3").value)+1)/100;
   let somlkeltoba= (parseFloat(document.querySelector("#tobasomkm3").value)+1)/100;
   let ardeltoba = (parseFloat(document.querySelector("#tobaardm3").value))/100;

   let walltool= parseFloat(document.querySelector("#walltoolm3").value);
   let wallheight= parseFloat(document.querySelector("#wallheightm3").value);
   let wallsomk = parseFloat(document.querySelector("#wallsomkm3").value);

   let result =Math.round((walltool*wallheight*wallsomk/(tooleltoba*somlkeltoba*ardeltoba))*1.05) 
   let cement = 150*result/1000
   let water = cement/2
   let sand = 0.5*result/1000
   let p1 = document.querySelector(".p10");
   let p2 =document.querySelector(".p11");
   let p3 =document.querySelector(".p12");
   let p4 = document.querySelector(".p13");
  console.log(cement)
   p1.innerHTML = `${result } = عدد الطوب بعد حساب نسبه الهالك `;
   p2.innerHTML = ` ${cement } =  كميه الاسمنت اللازمه بال كجم `;
   p3.innerHTML = ` ${ water } =  كميه المياه اللازمه بال باللتر `;
   p4.innerHTML = ` ${ sand } =  كميه الرمل اللازمه بال بالمتر `;
 };
