<template>
  <div>
    <div class="ui center aligned container">
      <div id="print-btn">
        <!-- <button  @click="pdfCreate(participant)"> -->
        <button  @click="ccspdf(participant)">
          <i class="print icon"></i> Print to Pdf
        </button>
      </div>
        <br>
    </div>
    <div id="box">
      <div ref="content">
        <div id="printHTML" style="width: 297mm;height: 210mm;" >
          <h1>Certificate of Attendance</h1>
          <h3>Nomor: {{ participant.noParticipant }}/{{ training.certificateNumber }}</h3>
          <br>
          <h4>Dengan ini menyatakan bahwa:</h4>
          <h2>{{ participant.participantName }}</h2>
          <p>Telah mengikuti <b><u> {{training.trainingName}} </u></b> pada tanggal {{training.date}} di {{training.place}} dengan materi sebagai berikut:</p>
          <loop v-for="(theory, j) in training.theories" :key="j">
            {{j+1}}. {{ theory }} <br>
          </loop>
          <br>
          <br>
          <div class="sign">
            Jakarta, {{ training.dateSign }} <br>
            Senior Manager IoT Platform <br>
            Divisi Digital Service, Telkom<br><br><br><br><br>
          <b><u>Dr. I Ketut Agung Enriko, S.T., M.Sc.</u></b><br>
          <b>NIK : 740108</b>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
import jspdf from 'jspdf';
import html2canvas from 'html2canvas';

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
      const doc = new jspdf('l', 'mm', 'a4')

      const html = this.$refs.content.innerHTML
      doc.fromHTML(html,15,15, {
        width:150
      })
      const name = participant.participantName 
      doc.save(`${name}.pdf`)
    },
    ccspdf(participant){
      const doc = new jspdf('l', 'mm', 'a4');
      /** WITH CSS */
      var canvasElement = document.createElement('canvas');
      html2canvas(this.$refs.content, { canvas: canvasElement }).then(function (canvas) {
        const img = canvas.toDataURL("image/jpeg", 0.8);
        doc.addImage(img,'JPEG',0,0);
        const name = participant.participantName 
        doc.save(`${name}.pdf`)
      });
    }

  },
  async mounted() {  
    this.participant = await api.getaparticipant(this.$route.params.id);
    this.training = await api.getatraining(this.participant.trainingId)
  }
};
</script>

<style scoped>
#box{
  box-shadow: 1px 1px 10px #000000;
  width: 297mm;
  height: 210mm;
  margin: auto;
}

#printHTML{
  background-image: url(../assets/SertifikatSosialisasiAntares.jpg);
  background-position: center center;
  background-repeat: no-repeat;
}

h1{
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  text-decoration: underline;
  font-size: 2.5em;
  padding-top: 78px;
}

h2{
  text-align: center;
  font-size: 2em;
}

h3{
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

h4{
  text-align: center;
}

p{
  line-height:1.5 ;
  padding-top:-1em ;
  margin-left:40% ;
  margin-right:10% ;
  line-height:20px;
}

loop{
  line-height:1.5 ;
  padding-top:-1em ;
  margin-left:40% ;
  margin-right:10% ;
  line-height:23px;
}

div .sign{
  margin-right: 120px;
  float: right;
}
</style>