//Crie duas filas: fila comum e fila especial

let filaComum = [];
let filaEspecial = [];
let senhaComum = 1;
let senhaEspecial = 1;

function gerarSenhaComum() {
     let senha = `C${senhaComum}`;
     senhaComum++;

     filaComum.push(senha);
     atualizarLista('filaComumLista', filaComum);
}

function gerarSenhaEspecial() {
     let senha = `E${senhaEspecial}`;
     senhaEspecial++;

     filaEspecial.push(senha);
     atualizarLista('filaEspecialLista', filaEspecial);
}

function atenderComum() {
     if (filaComum.length > 0) {
          filaComum.shift();
          atualizarLista('filaComumLista', filaComum);
     } else {
          alert('Fila vazia');
     }
}

function atenderEspecial() {
     if (filaEspecial.length > 0) {
          filaEspecial.shift();
          atualizarLista('filaEspecialLista', filaEspecial);
     } else {
          alert('Fila vazia');
     }
}

function atualizarLista(listaId, fila) {
     const lista = document.getElementById(listaId);
     lista.innerHTML = '';
     fila.forEach(senha => {
          const li = document.createElement('li');
          li.textContent = senha;
          lista.appendChild(li);
     });
}