<template>
  <div>
    <training-show></training-show>
    <br>
      <div class="ui center aligned container">
        <router-link :to="{name: 'new-participant', params:{id: $route.params.id}}" exact class="item">
          <i class="plus icon"></i> New Participant
        </router-link>
      </div>
    <br>
    <participant-tabel></participant-tabel>
  </div>
</template>

<script>
import trainingShow from './trainingShow.vue';
import participantTabel from '../components/participantTabel';

export default {
  name: 'Participant',
  data: function(){
    return {
      Statetraining: false
    }
  },
  components: {
    'training-show': trainingShow, 
    'participant-tabel': participantTabel,
  },
};
</script>

<style scoped>
.actions a {
  display: block;
  text-decoration: underline;
  margin: 0px 10px;
}
</style>