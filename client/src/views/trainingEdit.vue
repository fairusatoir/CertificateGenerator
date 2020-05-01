<template>
  <div>
    <div class="ui text container">
      <h1>Edit Training</h1>
      <training-form @createOrUpdate="createOrUpdate" :training=this.training></training-form>
    </div>
  </div>
</template>

<script>
import trainingForm from '../components/trainingForm.vue';
import { api } from '../helpers/helpers';

export default {
  name: 'edit',
  components: {
    'training-form': trainingForm
  },
  data: function() {
    return {
      training: {}
    };
  },
  methods: {
    createOrUpdate: async function(training) {
      if (!(typeof(training.theories) === "object")){
        const theories = training.theories;
        training.theories = theories.split(',');
      }
      
      
      await api.updatetraining(training);
      this.flash('Training updated sucessfully!', 'success');
      this.$router.push(`/training`);
    }
  },
  async mounted() {
    this.training = await api.getatraining(this.$route.params.id);
  }
};
</script>