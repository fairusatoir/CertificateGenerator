<template>
  <div>
    <h1>Edit Training</h1>
    <training-form @createOrUpdate="createOrUpdate" :training=this.training></training-form>
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
      await api.updatetask(training);
      this.flash('training updated sucessfully!', 'success');
      this.$router.push(`/training/${training._id}`);
    }
  },
  async mounted() {
    this.training = await api.gettraining(this.$route.params.id);
  }
};
</script>