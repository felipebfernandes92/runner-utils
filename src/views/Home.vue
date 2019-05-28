<template>
  <div class="home">
    <!-- {{ count }}
    <p>Dobro: {{ dobroAdicionados }}</p>
    <button @click="adicionar">Adicionar</button>
    <button @click="remover">Remover</button> -->  
  <v-form>
    <v-container>
      <v-layout>
        <v-flex xs12 md12>
          <v-text-field
            v-model="distancia"
            label="Distância (km)"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs12 md12>
          <v-text-field
            v-model="pace"
            label="Pace"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs12 md12>
          <v-text-field
            v-model="tempoTotal"
            label="Tempo total"
            required
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'home',
  // components: {
  //   HelloWorld
  // },
  data() {
    return {
      distancia: null,
      pace: null
    }
  },
  computed: {
    tempoTotal() {
      let minutosSegundos = 0;

      if (this.pace) {
        minutosSegundos = this.pace.split(':');
        let somaSegundosPace = (minutosSegundos[1] * this.distancia) / 60;
        let total = (this.distancia * minutosSegundos[0]) + somaSegundosPace;

        let segundos = ((total % 1) * 60) / 100;

        return (Math.floor(total) + segundos).toFixed(2);
      }

      return 0;
    },

    ...mapState([
      'count'
    ]),

    ...mapGetters([
      'dobroAdicionados'
    ])
  },

  methods: {
    ...mapMutations([
      'adicionar',
      'remover'
    ])
  }
}
</script>
