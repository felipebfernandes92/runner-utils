<template>
  <div class="home">
    {{ count }}
    <p>Dobro: {{ dobroAdicionados }}</p>
    <button @click="adicionar">Adicionar</button>
    <button @click="remover">Remover</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
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
