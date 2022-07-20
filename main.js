'use strict';
/*cria o banco vasio*/
let banco = [];

const getBanco = () => JSON.parse(localStorage.getItem('kanban_new')) || [];
const setBanco = (banco) => localStorage.setItem('kanban_new', JSON.stringify(banco));

/*cria o novo item*/
const criarItem = (tarefa, status, indice) => {
    const item = document.createElement("div");
    item.classList.add("kanban_new");
    item.innerHTML = `
        <div class="nota">
        <label>
        
        <input type="checkbox" ${status} data-indice=${indice}>
        <span>              ${tarefa}           </span>  
        <input type="button" id="inputx" value="X" data-indice=${indice}>         
        
        </label>
        </div>

    `;
    document.getElementById("fix_kanban").appendChild(item);
};

/*limpa a tarefa*/
const limparTarefas = () => {
    const fix_kanban = document.getElementById("fix_kanban");
    while (fix_kanban.firstChild) {
        fix_kanban.removeChild(fix_kanban.lastChild);
    }
};

/*atualisa o Dom*/
const atualizarTela = () => {
    limparTarefas();
    const banco = getBanco();
    banco.forEach((item, indice) => criarItem(item.tarefa, item.status, indice));
};

/*item a ser incerido*/
const inserirItem = (evento) => {
    const tecla = evento.key;
    const texto = evento.target.value;
    /*console.log(tecla);*/
    if (tecla === "Enter") {
        const banco = getBanco();
        banco.push({
            'tarefa': texto, 'status': ''
        });
        setBanco(banco);
        atualizarTela();
        evento.target.value = '';
    }

};

const removerItem = (indice) => {
    const banco = getBanco();
    banco.splice(indice, 1);
    setBanco(banco);
    atualizarTela();
}

const atualizarItem = (indice) => {
    const banco = getBanco();
    banco[indice].status = banco[indice].status === '' ? 'checked' : '';
    setBanco(banco);
    atualizarTela();
}
const clickItem = (evento) => {
    const elemento = evento.target;
    if (elemento.type === 'button') {
        const indice = elemento.dataset.indice;
        removerItem(indice);
    } else if (elemento.type === 'checkbox') {
        const indice = elemento.dataset.indice;
        atualizarItem(indice);
    }
}

document
    .getElementById("newItem")
    .addEventListener("keypress", inserirItem);

document
    .getElementById("fix_kanban")
    .addEventListener("click", clickItem);


atualizarTela();

const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
}

const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
}