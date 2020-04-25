<template>
 <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>


    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="user icon"></i>Name
      </div>
      <input type="text" placeholder="name participant" v-model="task.name" />
    </div>    

    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'participant-form',
  props: {
    participant: {
      type: Object,
      required: false,
      default: () => {
        return {
          name: ''
        };
      }
    }
  },
  data() {
    return {
      errorsPresent: false
    };
  },
  methods: {
    onSubmit: function() {
      if (this.participant.name === '') {
        this.errorsPresent = true;
      } else {
        this.$emit('createOrUpdate', this.participant);
      }
    }
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>