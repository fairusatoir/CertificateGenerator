<template>
  <div>
    <h1>Training</h1>
    <table id="tasks" class="ui celled table">
      <thead>
        <tr >
         <th>  <i class="folder open icon"></i>Name Training</th>
         <th>  <i class="tag icon"></i>Certificate Number</th>
          <th> <i class="calendar alternate icon"></i>Date</th>
          <th> <i class="pencil alternate icon"></i>Date Sign</th>
          <th> <i class="map marker alternate icon"></i>place</th>
          <th> <i class="bookmark icon"></i>Theory</th>
                    <th> <i class="id badge icon"></i></th>
                   <th> <i class="edit icon"></i></th>
                    <th> <i class="trash icon"></i></th>
          <!-- <th colspan="3"></th> -->
        </tr>
      </thead>
      <tr v-for="(training, i) in trainings" :key="i">
        <td>{{ training.trainingName }}</td>
        <td>{{ training.certificateNumber }}</td>
        <td>{{ training.date }}</td>
        <td>{{ training.dateSign}}</td>
        <td>{{ training.place}}</td>
        <td>
          <div v-for="(theory, j) in training.theories" :key="j">
            - {{ theory }}
          </div>
        </td>
        <td width="75" class="center aligned">
            <router-link :to="{ name: 'Participant', params: { id: training._id }}">
              <i class="big id badge icon"></i>
            </router-link>
        </td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'edit', params: { id: training._id }}">Edit</router-link>
        </td>
        <td width="75" class="center aligned" @click.prevent="onDestroy(training._id)">
          <a :href="`/training/${training._id}`">Delete</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  name: 'training',
  data() {
    return {
      trainings: [],
    };
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm('Are you sure?');
      if (!sure) return;
      await api.deletetraining(id);
      this.flash('training deleted sucessfully!', 'success');
      const newtrainings = this.trainings.filter(training => training._id !== id);
      this.trainings = newtrainings;
    }
  },
  async mounted() {  
    const trainings = await api.gettrainings();
    // console.log(trainings);
    
    this.trainings = trainings;
  }
};
</script>