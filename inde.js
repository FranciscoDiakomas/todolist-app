// @ts-nocheck
window.onload = function () {
        //pegando o btn
        const btncriar = document.getElementById('btncriar')
        btncriar.addEventListener('click', (e) => {
                e.preventDefault()
                const tarefa = document.getElementById('entrada').value
                if (String(tarefa).length === 0) {
                        console.log('aviso')
                        window.alert('ENTRADA VAZIA')
                } else {

                         //pegando o datas 
                        const data = new Date()
                        const dia = data.getDay()
                        const mes = data.getMonth()
                        const ano = data.getFullYear()
                        //pegando o card principal
                        const res = document.getElementById('tarefas')
                        //craiando um elemento
                        res.innerHTML += `
                        <div class="tarefa">
                                <span >${tarefa}</span>
                                <span>${dia} / ${mes+1} / ${ano}</span>
                        <div class="opt">
                                <input type="radio">
                                <img src="/icons/botao-apagar.png" alt="eliminar" class='eliminar'>
                        </div>
                      </div>
                        `
                            const eliminar = document.querySelectorAll('.eliminar')
                        eliminar.forEach((elemento) => {
                                elemento.addEventListener('click', () => {
                                const pai = elemento.parentElement
                                const avo = pai.parentElement
                                avo.style.display = 'none'
                        })
                                
                        }
                        )
                        

                }
        })

}