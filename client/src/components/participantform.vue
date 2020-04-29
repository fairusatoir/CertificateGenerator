<template>
 <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>


    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="user icon"></i>Name
      </div>
      <input type="text" placeholder="name participant" v-model="participant.participantName" />
    </div> 

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="user icon"></i>Number
      </div>
      <input type="String" maxlength=3 placeholder="Max 3 Digits, ex: 001" v-model="participant.noParticipant" />
    </div>     

    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
// import { api } from '../helpers/helpers';
export default {
  name: 'participant-form',
  props: {
    participant: {
      type: Object,
      required: false,
      default: () => {
        return {
          participantName: '',
          noParticipant:'',
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

      if (this.participant.participantName === '') {
        this.errorsPresent = true;
      } else {
        this.$emit('createOrUpdate', this.participant);
      }
    }
  },
};
</script>

<style scoped>
.error {
  color: red;
}

::placeholder {
  color: black;
  opacity: 100; /* Firefox */
}
</style>