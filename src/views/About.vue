<template>
  <div class="about">
    <ul>
      <li v-for="track in tracks" :key="track">
        {{ track.tempo }} - {{ metros(track.distancia) }}
      </li>
    </ul>
  </div>
</template>

<script>
import { parse } from 'path';
let convert = require('xml-js');
import axios from 'axios';
import moment from 'moment';

export default {
  data() {
    return {
      dados: null,
      xml: null,
      tracks: null
    }
  },

  methods: {
    metros(value) {
      return parseFloat(value).toFixed(2) + ' metros';
    },

    getAtividades() {
      let dados = [];
      let inicioAtividade = this.dados.elements[0].elements[0].elements[0].elements[0].elements[0].text;
      
      if (this.dados) {
        for (let element of this.dados.elements[0].elements[0].elements[0].elements[1].elements[6].elements) {
          let horaTrack = element.elements[0].elements[0].text;
          let tempoPercorridoTrack = moment(horaTrack).diff(
            moment(inicioAtividade), 'seconds'
          );

          dados.push({
            'tempo': tempoPercorridoTrack,
            'distancia': element.elements[3].elements[0].text
          });
        };

        this.tracks = dados;
      }
    }
  },

  mounted() {
    axios.get('http://localhost:8080/garmin.xml')
        .then(response => {
            this.xml = response.data;
            let result = convert.xml2json(this.xml, null);
            this.dados = JSON.parse(result);
            this.getAtividades();
        }
    )
  }
}
</script>

