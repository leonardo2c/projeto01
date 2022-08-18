/* SCRIPT INCLUIR EM TABELA */
/*
var regNome = document.querySelector("#reg");
var regIdade = document.querySelector("#reg");

regNome.addEventListener("click", function(e) {
        e.preventDefault();
        var nome = document.querySelector("#nome");
        var valueNome = nome.value;
        console.log(valueNome);
        var idade = document.querySelector("#idade");
        var valueIdade = idade.value;
        console.log(valueIdade);

        var tabela = document.querySelector("#table");
        var tableRow = document.createElement("TR");
        var tdNome = document.createElement("TD");
        var tdIdade = document.createElement("TD");
        tdNome.innerHTML = valueNome;
        tdIdade.innerHTML = valueIdade;
        tabela.appendChild(tableRow);
        tableRow.appendChild(tdNome);
        tableRow.appendChild(tdIdade);
});
*/

/* SCRIPT Janela Modal(PopUp) para Login do ADM*/
document.getElementById("loginADM").addEventListener("click", function () {
            document.querySelector(".popup1").style.display = "flex";
        })
        
        document.querySelector(".close").addEventListener("click",function () {
            document.querySelector(".popup1").style.display = "none";
        })
        
        document.querySelector("#loginUser1").addEventListener("click",function(){
           window.location = "pagina-administrador.html";
        });

/* SCRIPT Janela Modal(PopUp) para Login do Diretor*/
document.getElementById("loginDIR").addEventListener("click", function(){
            document.querySelector(".popup2").style.display = "flex";
        })
        
        document.querySelector(".close").addEventListener("click",function(){
            document.querySelector(".popup2").style.display = "none";
        })
        
        document.querySelector("#loginUser2").addEventListener("click",function(){
           window.location = "pagina-diretor.html";
        });

/* SCRIPT Janela Modal(PopUp) para Login do Responsável pelo aluno*/
document.getElementById("loginPAIS").addEventListener("click", function(){
            document.querySelector(".popup3").style.display = "flex";
        })
        
        document.querySelector(".close").addEventListener("click",function(){
            document.querySelector(".popup3").style.display = "none";
        })
        
        document.querySelector("#loginUser3").addEventListener("click",function(){
           window.location = "pagina-pais.html";
        });