<template>
  <div>
    <h1>Edit Participant</h1>
    <participant-form @createOrUpdate="createOrUpdate" :participant=this.participant></participant-form>
  </div>
</template>

<script>
import participantForm from '../components/participantform';
import { api } from '../helpers/helpers';

export default {
  name: 'edit-participant',
  components: {
    'participant-form': participantForm
  },
  data: function() {
    return {
      participant: {}
    };
  },
  methods: {
    createOrUpdate: async function(participant) {

      const mess = await api.updateparticipant(participant);

      if (mess.codeName == "DuplicateKey") {
        window.alert('Your Number is Duplicate');
        return;
      }
      
      this.flash('Participant updated sucessfully!', 'success');
      this.$router.push(`/participant/${participant.trainingId}`);
    //   this.$router.push(`/training/`);
    }
  },
  async mounted() {
    this.participant = await api.getaparticipant(this.$route.params.id);
  }
};
</script>