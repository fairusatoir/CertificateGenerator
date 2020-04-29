<template>
  <div>
    <div class="ui labeled input fluid">
      <div class="ui label">
      <i class="folder open icon"></i>  Training
      </div>
      <input type="text" readonly  :value="training.trainingName"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      <i class="tag icon"></i>  Number
      </div>
      <input type="text" readonly  :value="training.certificateNumber"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      <i class="calendar alternate  icon"></i>  date
      </div>
      <input type="text" readonly  :value="training.date"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      <i class="pencil alternate icon"></i>Sign
      </div>
      <input type="text" readonly  :value="training.dateSign"/>
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
      <i class="map marker alternate icon"></i>  Place
      </div>
      <input type="text" readonly  :value="training.place"/>
    </div>

     <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="bookmark icon"></i> Theories
      </div>
      <input type="text" readonly  :value="training.theories"/>
    </div>
    <div class="actions">
      <router-link :to="{ name: 'edit', params: { id: this.$route.params.id }}">
      <button class="fluid ui button">
        <center> Edit training </center>
      </button>
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
    this.training = await api.getatraining(this.$route.params.id);
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