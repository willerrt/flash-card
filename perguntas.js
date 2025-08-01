criarCartao(
    "Minecraft",    
    "Qual é a receita para criar um Golem de Ferro?",  
    "Use 4 blocos de ferro e uma abóbora esculpida. Coloque os blocos de ferro em forma de 'T' e a abóbora no topo, no bloco central." 
);

criarCartao(
    "Minecraft",    
    "Para que serve a 'Poção de Visão Noturna'?",  
    "Permite que o jogador enxergue perfeitamente em áreas escuras e debaixo d'água por um período de tempo." 
);

criarCartao(
    "Minecraft",    
    "Qual é o minério mais raro de se encontrar no jogo?",  
    "O minério mais raro é a esmeralda, encontrada principalmente em biomas de montanha." 
);

criarCartao(
    "Minecraft",    
    "O que acontece se você minerar um Bloco de Diamante com uma picareta de pedra?",  
    "A picareta de pedra não é forte o suficiente para minerar o bloco de diamante. O bloco será quebrado, mas nenhum diamante será dropado." 
);

criarCartao(
    "Minecraft",    
    "Qual item é necessário para criar um portal para o Nether?",  
    "Você precisa de Obsidiana para construir a moldura do portal e um isqueiro (ou outro item que gere fogo) para ativá-lo." 
);

criarCartao(
    "Minecraft",    
    "Como você doma um cavalo no Minecraft?",  
    "Você precisa montar no cavalo repetidamente até que ele pare de te derrubar e corações apareçam. Depois, é só colocar uma sela nele." 
);

document.querySelectorAll('#container .cartao').forEach(cartao => {
    if (!cartao.innerHTML.trim()) {
        cartao.remove();
    }
});