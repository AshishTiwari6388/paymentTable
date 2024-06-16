let signupBtn=document.querySelectorAll(".yearlyPayment button");
let signupPage=document.querySelector(".main .signupPage");
let closePage=document.querySelector(".main .signupPage .close");
let yearlyPage=document.querySelector(".main .paymentMethodYearly");
let monthlyPage=document.querySelector(".main .paymentMethodMonthly");
let yearlyPageBtn=document.querySelectorAll("#Yearly");
let monthlyPageBtn=document.querySelectorAll("#monthly");
let submit=document.querySelector(" .signupPage .formdata button");
let formdata=document.querySelector(" .signupPage .formdata");
signupBtn[0].addEventListener("click",()=>{
    signupPage.style.display="initial";
})
signupBtn[1].addEventListener("click",()=>{
    signupPage.style.display="initial";
})
signupBtn[2].addEventListener("click",()=>{
    signupPage.style.display="initial";
})
signupBtn[3].addEventListener("click",()=>{
    signupPage.style.display="initial";
})
signupBtn[4].addEventListener("click",()=>{
    signupPage.style.display="initial";
})
signupBtn[5].addEventListener("click",()=>{
    signupPage.style.display="initial";
});
closePage.addEventListener("click",()=>{
    signupPage.style.display="none";
});
yearlyPageBtn[0].addEventListener("click",()=>{
    yearlyPage.style.display="flex";
    monthlyPage.style.display="none";
    yearlyPageBtn[0].classList.add("active");
    monthlyPageBtn[0].classList.remove("active");
});
yearlyPageBtn[1].addEventListener("click",()=>{
    yearlyPage.style.display="flex";
    monthlyPage.style.display="none";
    yearlyPageBtn[0].classList.add("active");
    monthlyPageBtn[0].classList.remove("active");
});
monthlyPageBtn[0].addEventListener("click",()=>{
    yearlyPage.style.display="none";
    monthlyPage.style.display="flex";
    yearlyPageBtn[1].classList.remove("active");
    monthlyPageBtn[1].classList.add("active");
});
monthlyPageBtn[1].addEventListener("click",()=>{
    yearlyPage.style.display="none";
    monthlyPage.style.display="flex";
    yearlyPageBtn[1].classList.remove("active");
    monthlyPageBtn[1].classList.add("active");
});
submit.addEventListener("click",()=>{
    formdata.style.display="none";
    signupPage.classList.add("success");
    setTimeout(() => {
        signupPage.classList.remove("success");
        signupPage.style.display="none";
        formdata.style.display="initial";
    },3000);
})