const app = Vue.createApp({
     data() {
          return {
               filaComum: [],
               filaEspecial: [],
               senhaComum: 1,
               senhaEspecial: 1
          }
     },
     methods: {
          gerarSenhaComum() {
               let senha = `C${this.senhaComum}`;
               this.senhaComum++;
               this.filaComum.push(senha);
          },
          gerarSenhaEspecial() {
               let senha = `E${this.senhaEspecial}`;
               this.senhaEspecial++;
               this.filaEspecial.push(senha);
          },
          atenderComum() {
               if (this.filaComum.length > 0) {
                    this.filaComum.shift();
               } else {
                    alert('Fila vazia');
               }
          },
          atenderEspecial() {
               if (this.filaEspecial.length > 0) {
                    this.filaEspecial.shift();
               } else {
                    alert('Fila Especial vazia');
               }
          },
     },
     template:
          `
        <p>Painel de Senhas</p>
          <button @click="gerarSenhaComum()"> Gerar senha </button>
          <button @click="gerarSenhaEspecial()"> Gerar senha especial </button>
          <button @click="atenderComum()"> Atender comum </button>
          <button @click="atenderEspecial()"> Atender especial </button>
        <br>
        <h3>Fila Comum</h3>
            <ul>
                <li v-for="senha in filaComum" :key="senha">{{ senha }}</li>
            </ul>

            <br>

            <h3>Fila Especial</h3>
            <ul>
                <li v-for="senha in filaEspecial" :key="senha">{{ senha }}</li>
            </ul>
        `,
})

app.mount('#app')
