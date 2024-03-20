function goToCadastrarConta() { window.location.href = "cadastrarConta.html"; }
function goToCadastrarPet() { window.location.href = "cadastrarPet.html"; }

function cadastrarConta() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
    let dataNascimento = document.getElementById("data-nascimento").value;
    let senha = document.getElementById("senha").value;

    if (nome == "" || email == "" || cep == "" || dataNascimento == "" || senha == "") {
        alert("Preencha todos os dados!");
    } else {
        let msg = "Dados cadastrados...\n";
        msg += "Nome: " + nome + "\n";
        msg += "E-mail: " + email + "\n";
        msg += "CEP: " + cep + "\n";
        msg += "Data de nascimento: " + dataNascimento + "\n";
        msg += "Senha: " + senha + "\n";

        alert("Conta cadastrada com sucesso! \n" + msg);
        window.location.href = "inicial.html";
    }
}

function cadastrarPet() {
    let nome = document.getElementById("nome").value;
    let tipo = document.getElementById("tipo").value;
    let raca = document.getElementById("raca").value;
    let temperamentos = document.getElementsByName("temperamentos");

    if (nome == "" || tipo == "" || raca == "" || temperamentos == "") {
        alert("Preencha todos os dados!");
    } else {
        let msg = "Dados cadastrados...\n";
        msg += "Nome: " + nome + "\n";
        msg += "Tipo: " + tipo + "\n";
        msg += "Raça: " + raca + "\n";

        if (document.getElementById("temperamento1").checked) {
            msg += "Temperamento: Raivoso \n";
        } else if (document.getElementById("temperamento2").checked) {
            msg += "Temperamento: Equilibrado \n";
        } else {
            msg += "Temperamento: Calmo \n";
        }

        alert("Conta cadastrada com sucesso! \n" + msg);
        window.location.href = "inicial.html";
    }
}