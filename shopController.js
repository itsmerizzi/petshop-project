function goToCarrinho(param) {
    let racao = "";
    let valor = "";

    switch(param) {
        case "umidaGato":
            racao = document.getElementById("racaoUmidaGato").innerText;
            valor = document.getElementById("valorRacaoUmidaGato").innerText;
            window.location.href = "carrinho.html?racao=" + racao + "&valor=" + valor;
            break;

        case "secaGato":
            racao = document.getElementById("racaoSecaGato").innerText;
            valor = document.getElementById("valorRacaoSecaGato").innerText;
            window.location.href = "carrinho.html?racao=" + racao + "&valor=" + valor;
            break;

        case "umidaCachorro":
            racao = document.getElementById("racaoUmidaCachorro").innerText;
            valor = document.getElementById("valorRacaoUmidaCachorro").innerText;
            window.location.href = "carrinho.html?racao=" + racao + "&valor=" + valor;
            break;

        case "secaCachorro":
            racao = document.getElementById("racaoSecaCachorro").innerText;
            valor = document.getElementById("valorRacaoSecaCachorro").innerText;
            window.location.href = "carrinho.html?racao=" + racao + "&valor=" + valor;
            break;
    }
}

function finalizarCompra() {
    alert("Compra finalizada!");
    window.location.href = "inicial.html";
}