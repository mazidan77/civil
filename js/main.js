const form1 = document.querySelector("#form1");
const form2 = document.querySelector("#form2");
const form3 = document.querySelector("#form3");
const form4 = document.querySelector("#form4");
const form5 = document.querySelector("#form5");
const form6 = document.querySelector("#form6");
const form7= document.querySelector("#form7");
const select = document.querySelector("select");
const ppp = document.querySelector(".ppp");
let buttonm2 = document.querySelector(".dismosatah")
let buttonm3 = document.querySelector(".dismokab")


// toggle steel container


let mabanyBtn = document.querySelector("#mabanyBtn");
mabanyBtn.onclick = function(eo){
// mabanyBtn.style.transitio ="all 2s"
  let mabanyBtn = document.querySelector("#mabanyBtn");
let mabanyContainer = document.querySelector("#mabanyContainer");
mabanyContainer.classList.toggle("mabanyDispaly")
mabanyBtn.classList.toggle("greenBackground")
}

// toggle mabany  container

steelBtn.onclick = function(eo){
  let steelBtn = document.querySelector("#steelBtn");
let steelContainer = document.querySelector("#steelContainer");
  steelContainer.classList.toggle("steelDispaly")
  steelBtn.classList.toggle("greenBackground")
}
// التنقل بين الطوب بالمتر المسطح والمكعب

var element1 = document.getElementById("display")
var element = document.getElementById("display1")
buttonm2.onclick = function(eo){
 buttonm2.classList.add("bricks")
 buttonm3.classList.remove("bricks")

element1.classList.remove("mosatah")
element.classList.add("mokab")

 
}
buttonm3.onclick = function(eo){
   buttonm3.classList.add("bricks")
   buttonm2.classList.remove("bricks")
   
   element.classList.remove("mokab")
   element1.classList.add("mosatah")

 
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




// حساب وزن الحديد
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
  note.innerHTML = `وزن المتر الطولي = القطر تربيع /162`
  inputone = " ";
}

//  استبدال اقطار حديد التسليح
form6.onsubmit = (e) => {
  e.preventDefault();
  let numberofsteel =document.querySelector("#numofsteel").value 
  let steel = document.querySelector("#steelChange").value
  let newsteel = document.querySelector("#newsteelChange").value
  let result =  Math.round( (numberofsteel*steel*steel)/(newsteel*newsteel))
  let p1 = document.querySelector(".resultnumberofsteel");
  p1.innerHTML = `${result } =عدد الاساخ الجديده `;
  console.log(result)
 }

// مسافه تكثيف الكانات
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



// حساب ارتفاع الكرسي
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



// عدد الطوب متر مسطح 
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
  
  p1.innerHTML = `عددالطوب بعد حساب نسبه الهالك = ${result} طوبه`;
   p2.innerHTML = ` كميه الاسمنت اللازمه = ${cement} كجم`;
   p3.innerHTML = ` كميه المياه اللازمه = ${water} لتر `;
   p4.innerHTML = ` كميه الرمل اللازمه = ${sand} متر`;
};

// عدد الطوب متر مكعب
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

  
   p1.innerHTML = `عددالطوب بعد حساب نسبه الهالك = ${result} طوبه`;
   p2.innerHTML = ` كميه الاسمنت اللازمه = ${cement} كجم`;
   p3.innerHTML = ` كميه المياه اللازمه = ${water} لتر `;
   p4.innerHTML = ` كميه الرمل اللازمه = ${sand} متر`;
 };
 // :كميه المحاره 
form7.onsubmit = (e) => {
  e.preventDefault();
let areaceling = document.querySelector("#areaceling").value
let cement =Math.round((areaceling/6)*10)/10 
let cementinkg =Math.round( (areaceling*50/6)*10)/10
let water = cementinkg / 2
let sand = Math.round(( 1*cement/6)*100)/100

  let pCement = document.querySelector(".cement")
  let pSand = document.querySelector(".sand")
  let pWater= document.querySelector(".water")

 pCement.innerHTML = `كميه الاسمنت اللازمه = ${cementinkg} كجم = ${cement} شكاره`;
 pSand.innerHTML = ` كميه الرمل اللازمه  =${sand} متر `;
 pWater.innerHTML = ` كميه المياه اللازمه = ${water} لتر `;

};


