<template>
  <div class="ui text container">
    <h1>New training</h1>
        <participant-form @createOrUpdate="createOrUpdate" ></participant-form>
  </div>
</template>

<script>
import participantForm from '../components/participantform';
import { api } from '../helpers/helpers';
export default {
  name: 'new-participant',
  components: {
    'participant-form': participantForm
  },
  methods: {
    createOrUpdate: async function(participant) {
      const idTraining = this.$route.params.id;
      const mess = await api.createparticipant(idTraining,participant);
      // console.log(mess);
      
      if (mess.code == 11000) {
        window.alert('Your Number is Duplicate');
        return;
      }
      this.flash('Participant created', 'success');
      
      this.$router.push(`/participant/${this.$route.params.id}`);
    }
  }
};
</script>