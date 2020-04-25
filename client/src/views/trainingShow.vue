<template>
  <div>
    <h1>Show Training</h1>

   
    <div class="ui labeled input fluid">
      <div class="ui label">
      <i class="tasks icon"></i>  Training
      </div>
      <input type="text" readonly  :value="task.trainingName"/>
    </div>

     <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="info circle icon"></i> date
      </div>
      <input type="text" readonly  :value="task.date"/>
    </div>
    <div class="actions">
      <router-link :to="{ name: 'edit', params: { id: this.$route.params.id }}">
        Edit training
      </router-link>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  name: 'show',
  data() {
    return {
      training: ''
    };
  },
  async mounted() {
    this.training = await api.gettraining(this.$route.params.id);
  }
};
</script>

<style scoped>
.actions a {
  display: block;
  text-decoration: underline;
  margin: 20px 10px;
}
</style>