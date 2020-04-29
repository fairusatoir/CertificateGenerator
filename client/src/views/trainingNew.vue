<template>
  <div>
    <h1>New training</h1>
    <training-form @createOrUpdate="createOrUpdate"></training-form>
  </div>
</template>

<script>
import trainingForm from '../components/trainingForm.vue';
import { api } from '../helpers/helpers';
export default {
  name: 'new-training',
  components: {
    'training-form': trainingForm
  },
  methods: {
    createOrUpdate: async function(training) {
      const theories = training.theories;
      training.theories = theories.split(',');

      await api.createtraining(training);
      this.flash('training created', 'success');
      this.$router.push(`/training`);
    }
  }
};
</script>