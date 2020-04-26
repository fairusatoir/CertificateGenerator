<template>
  <div>
    <h1>Training</h1>
    <table id="tasks" class="ui celled compact table">
      <thead>
        <tr>
         <th>  <i class="calendar plus icon"></i>Training</th>
          <th> <i class="info circle icon"></i>Date</th>
                    <th> <i class="lock open icon"></i></th>
                   <th> <i class="edit icon"></i></th>
                    <th> <i class="trash icon"></i></th>
          <!-- <th colspan="3"></th> -->
        </tr>
      </thead>
      <tr v-for="(training, i) in trainings" :key="i">
        <td>{{ training.trainingName }}</td>
        <td>{{ training.date }}</td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'show', params: { id: training._id }}">Show</router-link>
        </td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'edit', params: { id: training._id }}">Edit</router-link>
        </td>
        <td width="75" class="center aligned" @click.prevent="onDestroy(task._id)">
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
      trainings: []
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
    this.trainings = await api.gettrainings();
  }
};
</script>