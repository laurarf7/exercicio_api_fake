

            //Informações da Jogadora 1 (Rosamaria)
            const jog1 = `{
                "nome": "Rosamaria Montibeller",
                "idade": "29 anos",
                "posicao": "Oposta/Ponteira",
                "time": "Não definido",
                "foto": "<img src='imagens/rosamaria.png' width='450px'>"
            }`;
             //Informações da Jogadora 2 (Carolana)
            const jog2 = `{
                "nome": "Ana Carolina (Carolana)",
                "idade": "32 anos",
                "posicao": "Central",
                "time": "Scandicci (Itália)",
                "foto": "<img src='imagens/carolana.png' width='400px'>"
            }`;
            //Informações jogadora 3 (Jaqueline)
            const jog3 = `{
                "nome": "Jaqueline Carvalho",
                "idade": "39 anos",
                "posicao": "Ponteira",
                "time": "Campinas (Brasil)",
                "foto": "<img src='imagens/jaque.png' width='450px'>"
            }`;

            //Informações jogadora 4 (Brait)
            const jog4 = `{
                "nome": "Camila Brait",
                "idade": "34 anos",
                "posicao": "Líbero",
                "time": "Osasco São Cristóvão Saúde (Brasil)",
                "foto": "<img src='imagens/brait.png' width='450px'>"
            }`;

            //Informações jogadora 5 (Egonu)

            const jog5 = `{
                "nome": "Paola Egonu",
                "idade": "24 anos",
                "posicao": "Oposta",
                "time": "VakifBank (Turquia)",
                "foto": "<img src='imagens/egonu.png' width='450px'>"
            }`;
            
            
            
            //clicar no botão pegar o array da jogadora
            const jogadora1Button = document.getElementById("jogadora1");
            const jogadora2Button = document.getElementById("jogadora2");
            const jogadora3Button = document.getElementById("jogadora3");
            const jogadora4Button = document.getElementById("jogadora4");
            const jogadora5Button = document.getElementById("jogadora5");
            
            
            const dadosJogadoras = document.getElementById("dados");

            //Jogadora 1 (Rosamaria)
            const data = JSON.parse(jog1);

            jogadora1Button.addEventListener("click", () => {
                dadosJogadoras.innerHTML = `
                    <h2>${data.nome}</h2>
                    <p>Idade: ${data.idade}</p>
                    <p>Posição: ${data.posicao}</p>
                    <p>Time: ${data.time}</p>
                    ${data.foto}
                `;
            });
            //Jogadora 2 (Carolana)
            const data2 = JSON.parse(jog2);
    
            jogadora2Button.addEventListener("click", () => {
                dadosJogadoras.innerHTML = `
                    <h2>${data2.nome}</h2>
                    <p>Idade: ${data2.idade}</p>
                    <p>Posição: ${data2.posicao}</p>
                    <p>Time: ${data2.time}</p>
                    ${data2.foto}
                `;
            });
            //Jogadora 3 (Jaqueline)
            const data3 = JSON.parse(jog3);
    
            jogadora3Button.addEventListener("click", () => {
                dadosJogadoras.innerHTML = `
                    <h2>${data3.nome}</h2>
                    <p>Idade: ${data3.idade}</p>
                    <p>Posição: ${data3.posicao}</p>
                    <p>Time: ${data3.time}</p>
                    ${data3.foto}
                `;
            });
            //Jogadora 4 (Brait)
            const data4 = JSON.parse(jog4);
    
            jogadora4Button.addEventListener("click", () => {
                dadosJogadoras.innerHTML = `
                    <h2>${data4.nome}</h2>
                    <p>Idade: ${data4.idade}</p>
                    <p>Posição: ${data4.posicao}</p>
                    <p>Time: ${data4.time}</p>
                    ${data4.foto}
                `;
            });

            //Jogadora 5 (Egonu)
            const data5 = JSON.parse(jog5);
    
            jogadora5Button.addEventListener("click", () => {
                dadosJogadoras.innerHTML = `
                    <h2>${data5.nome}</h2>
                    <p>Idade: ${data5.idade}</p>
                    <p>Posição: ${data5.posicao}</p>
                    <p>Time: ${data5.time}</p>
                    ${data5.foto}
                `;
            });
        




