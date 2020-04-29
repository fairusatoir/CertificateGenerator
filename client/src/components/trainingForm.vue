<template>
 <form action="#" @submit.prevent="onSubmit">
    <p v-if="errorsPresent" class="error">Please fill out both fields!</p>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="user icon"></i>Training
      </div>
      <input type="text" placeholder="Name Training" v-model="training.trainingName" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="file plus icon"></i>Number
      </div>
      <input type="text" placeholder="Certificate Number" v-model="training.certificateNumber" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="calendar plus icon"></i>Date
      </div>
      <input type="date" placeholder="Training Date" v-model="training.date" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="calendar plus icon"></i>Signen
      </div>
      <input type="date" placeholder="Signing Date Certificate" v-model="training.dateSign" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="map icon"></i>Place
      </div>
      <input type="text" placeholder="Training Place" v-model="training.place" />
    </div>

    <div class="ui labeled input fluid">
      <div class="ui label">
        <i></i>Theories
      </div>
      <input type="text" placeholder="Theory1, theory2, ..." v-model="training.theories" />
    </div> 

    <button class="positive ui button">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'training-form',
  props: {
    training: {
      type: Object,
      required: false,
      default: () => {
        return {
          trainingName: '',
          certificateNumber: '',
          date: '',
          dateSign: '',
          place: '',
          theories: '',
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
      if (this.training.trainingName === '' || this.training.certificateNumber === '' || this.training.date === '' || this.training.dateSign === '' || this.training.place === '' || this.training.theories === '') {       
        this.errorsPresent = true;
      } else {
        this.$emit('createOrUpdate', this.training);        
      }
    }
  }
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