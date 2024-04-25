const form = document.querySelector("#form")
const nameInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const telInput = document.querySelector("#telefone");
const cityInput = document.querySelector("#cidade");
const stateInput = document.querySelector("#estado");
const adressInput = document.querySelector("#endereco");
const genderMale = document.getElementById("masculino");
const genderFemale = document.getElementById("feminino");
const genderOther = document.getElementById("outro");
const dateInf = document.querySelector("#data_nascimento");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //verifica se o nome está vazio.
    if(nameInput.value === "" ){
        errorInput(nameInput , "Preencha o seu nome!");
    }else{
        const formItem = nameInput.parentElement;
        formItem.classList = "inputBox";
    }

    //verificar email e se é valido.
    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        errorInput(emailInput , "Digite um email válido!");
    }else{
        const formItem = emailInput.parentElement;
        formItem.classList = "inputBox";
    }

    //verificar quantidade de números digitados.
    if(!validNumber(telInput.value, 8)){
        errorInput(telInput , "O número precisa de no mínimo 8 números");
    }else{
        const formItem = telInput.parentElement;
        formItem.classList = "inputBox";
    }

    //Verificar data de Nascimento
    if(dateInf.value === ""){
        errorInput(dateInf , "Selecione a Data de Nascimento");
    }else{
        const formItem = dateInf.parentElement;
        formItem.classList = "inputBox";
    }

    //verificar gênero
    if(genderMale.checked || genderFemale.checked || genderOther.checked === true){
    } else{
        alert("Selecione um Gênero")
    }

    if(cityInput.value === ""){
        errorInput(cityInput , "Digite a sua cidade!");
    }else{
        const formItem = cityInput.parentElement;
        formItem.classList = "inputBox";
    }

    if(stateInput.value === ""){
        errorInput(stateInput , "Digite o Estado!");
    }else{
        const formItem = stateInput.parentElement;
        formItem.classList = "inputBox";
    }

    if(adressInput.value === ""){
        errorInput(adressInput , "Digite o seu Endereço!");
    }else{
        const formItem = adressInput.parentElement;
        formItem.classList = "inputBox";
    }
    

    form.submit();
})

//função que valida o email
function isEmailValid(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    if(emailRegex.test(email)){
        return true;
    }
    return false;

}

//função para verificar número válido
function validNumber(number, minNumbers){
    if(number.length >= minNumbers){
        //número válido
        return true;
    }
    //número inválido
    return false;
}

//mensagem de erro
function errorInput(input,message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;

    formItem.className = "inputBox error"
}



