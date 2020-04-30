<template>
  
  <div>
    <div class="ui center aligned container">
      <button @click="pdfCreate(participant)">
        <i class="print icon"></i> Print to Pdf
      </button>
        <br>
    </div>
    <div ref="content">
    <h1>TerPrint</h1>
    <h3>{{ participant.participantName }}</h3>
    <h3>{{ training.trainingName }}</h3>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
import jspdf from 'jspdf';

export default {
  name: 'print',
  data() {
    return {
      training: '',
      participant:''
    };
  },
  methods: {
    pdfCreate(participant){
      const doc = new jspdf()

      const html = this.$refs.content.innerHTML

      doc.fromHTML(html,15,15, {
        width:150
      })
      const name = participant.participantName 
      doc.save(`${name}`)
    }
  },
  async mounted() {  
    this.participant = await api.getaparticipant(this.$route.params.id);
    this.training = await api.getatraining(this.participant.trainingId)
  }
};
</script>

<style scoped>
.error {
  color: red;
}

::placeholder {
  color: black;
  opacity: 100; /* Firefox */
}
</style>