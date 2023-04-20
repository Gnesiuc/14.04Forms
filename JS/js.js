const buttons = document.querySelectorAll(".btn")
const singIn = document.querySelector(".singIn")
const singUp = document.querySelector(".singUp")
const container = document.querySelector(".container")
const formCreateAccount = document.querySelector("#form")
const formSingIn = document.querySelector(".form")
const nameCreateAccount = formCreateAccount.querySelector(".name-login")
const emailCreateAccount = formCreateAccount.querySelector(".email-login")
const passwordCreateAccount = formCreateAccount.querySelector(".password-login")
const errorNameCreateAccount = document.querySelector(".errorName")
const errorEmailCreateAccount = document.querySelector(".errorEmail")
const errorPasswordCreateAccount = document.querySelector(".errorPassword")
const emailSingIn = document.querySelector(".email-connecting")
const passwordSingIn = document.querySelector(".password-connecting")
const errorEmailSignIn = document.querySelector(".error-Email")
const errorPasswordSignIn = document.querySelector(".error-Password")

const regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//^ вверху это    позволяем использовать алфавит и цифры + к этому обязан поставить
// собачку

let users =[]

buttons.forEach(btn =>{
    btn.addEventListener("click",() =>{
        container.classList.toggle("active")//Метод toggle позволяет привязать несколько обработчиков событий к элементу. Привязанные обработчики будут поочередно вызываться после щелчка мыши на элементе т. е. после первого щелчка будет вызван первый обработчик события, после второго второй и т.
    })
})

const showNameError = (nameValue,errorMessage,minLength,maxLength) =>{
    if (nameValue.value === "") {
        errorMessage.textContent = "This field should not be empty"
        
    } else if (nameValue.value.length < minLength || nameValue.value.length > maxLength) {
        errorMessage.textContent = `Minimum ${minLength} caracters max ${maxLength}`
        nameValue.className = "invalid"
    }  else {
        nameValue.className = "valid"
        errorMessage.textContent = ""
    }

}
nameCreateAccount.addEventListener("input",()=>{
    showNameError(nameCreateAccount,errorNameCreateAccount,3,9)
})