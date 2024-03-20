function agendarBanho() { window.location = "agendamento.html?agendamento=banho"; }
function agendarTosa() { window.location = "agendamento.html?agendamento=tosa"; }

function selectAgendamento(tipo) {
    if (tipo == "banho") {
        // Seleciona automaticamente a opção do serviço banho
        // caso ela tenha sido selecionada na pagina servicos.html
        let inputBanho = document.getElementById("banho");
        inputBanho.checked = true;
    } else {
        // Seleciona automaticamente a opção do serviço tosa
        // caso ela tenha sido selecionada na pagina servicos.html
        let inputTosa = document.getElementById("tosa");
        inputTosa.checked = true;
    }
}

function agendarServico() {
    let msg = "Serviço agendado!\n";

    // Obter o valor do serviço (radio)
    msg += document.getElementById("banho").checked ? "Serviço: Banho \n" : "Serviço: Tosa \n";
    
    // Obter o valor da tele-busca (checkbox)
    var teleBusca = document.getElementById('telebusca').checked;
    msg += teleBusca ? "Tele-busca: Sim\n" : "Tele-busca: Não\n";

    // Obter o valor da data e hora
    var dataHora = document.getElementById('dataHora').value;
    msg += "Data e hora: " + dataHora;
    
    alert(msg);
    window.location.href = "inicial.html";
}