const form1 = document.querySelector("#form1")
const form2 = document.querySelector("#form2")
const form3 = document.querySelector("#form3")
const select =document.querySelector("select")
const ppp =document.querySelector(".ppp")
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



select.addEventListener('input', updateValue)
function updateValue(e) {
    let inputone =document.querySelector("#one-input").value
ppp.classList.add("p-one" )
   let p1 =document.querySelector(".p1")
   let p2 =document.querySelector(".p2")
   let p3 =document.querySelector(".p3")
let weightOfOneMeter =Math.round(((inputone*inputone)/162)*1000)/1000
let weightOf12m = weightOfOneMeter*12
let numeber = Math.round(1000/weightOf12m)
p1.innerHTML =`${weightOfOneMeter}=وزن المتر الطولي ل حديد قطر  ${inputone}`
p2.innerHTML =`${weightOf12m} وزن السيخ طوله 12 متر هو `
p3.innerHTML =`  ${numeber} =عدد الاسياخ في الطن  `
inputone = " "
  }

  form2.onsubmit =(e)=>{
    e.preventDefault()
   let inputone =document.querySelector("#big-span").value
   let inputtwo =Math.round((document.querySelector("#free-hieght").value*(1/6)))
   let p1 =document.querySelector(".p4")
   if (inputone>inputtwo && inputone>50){
    p1.innerHTML=` ${inputone} يتم التكثيف علي مسافه`
   }else if(inputtwo>inputone && inputtwo>50){
    p1.innerHTML=` ${inputtwo}يتم التكثيف علي مسافه`
   }else{
    p1.innerHTML=`  50 يتم التكثيف علي مسافه `
   }
 
console.log(inputtwo)
}


form3.onsubmit =(e)=>{
    e.preventDefault()
   let thickness =document.querySelector("#thickness").value
   let cover = document.querySelector("#cover").value
   let down =document.querySelector("#down").value/10
   let up =document.querySelector("#up").value/10
   let watar =document.querySelector("#watar").value/10
   let p1 =document.querySelector(".p5")
// let result =(thickness - ((2*cover)-(2*down)-(2*up)-watar))
let result = thickness-2*cover-2*down-2*up-watar
let finalresult = Math.round(result*1000)/1000
p1.innerHTML=`${finalresult}`


}
