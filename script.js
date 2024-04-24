const nameInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const telInput = document.querySelector("#telefone");
const cityInput = document.querySelector("#cidade");
const stateInput = document.querySelector("#estado");
const adressInput = document.querySelector("#endereco");
const dateInf = document.querySelector("#data_nascimento");

const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click",(e)=>{
    e.preventDefault()

    const nameValue = nameInput.value;
    const emailValue = emailInput.value;
    const telValue = telInput.value;
    const cityValue = cityInput.value;
    const stateValue = stateInput.value;
    const adressValue = adressInput.value;
    const dateInformation = dateInf.value;

    if(nameValue === '' || emailValue === '' || telValue === '' || cityValue === '' || 
       stateValue === '' || adressValue === '' || dateInformation === ''){
        alert("Complete todos os campos para dar continuidade");
    }
    else{
        alert("Formulário enviado com sucesso!")
    }
})