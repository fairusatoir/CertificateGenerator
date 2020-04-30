<template>
  <div>
    <table id="tasks" class="ui celled table">
      <thead>
        <tr >
         <th>  <i class="folder open icon"></i>Name Participant</th>
                    <th> <i class="print icon"></i></th>
                   <th> <i class="edit icon"></i></th>
                    <th> <i class="trash icon"></i></th>
        </tr>
      </thead>
      <tr v-for="(participant, i) in participants" :key="i">
        <td>{{ participant.participantName }}
        <td width="75" class="center aligned">
              <!-- <button @click="toGoogle()"> -->
              <!-- </button> -->
            <router-link :to="{ name: 'print-participant', params: { id: participant._id }}" target="_blank">
                <i class="print icon"></i>
            </router-link>
        </td>
        <td width="75" class="center aligned">
          <router-link :to="{ name: 'edit-participant', params: { id: participant._id }}">Edit</router-link>
        </td>
        <td width="75" class="center aligned" @click.prevent="onDestroy(participant._id)">
          <a :href="`/training/${participants._id}`">Delete</a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  name: 'participant-tabel',
  data() {
    return {
      participants: []
    };
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm('Are you sure?');
      if (!sure) return;
      await api.deleteparticipant(id);
      this.flash('participant deleted sucessfully!', 'success');
      const newparticipants = this.participants.filter(participant => participant._id !== id);
      this.participants = newparticipants;
    },
    // toGoogle:function (){
    //   window.open("http://www.google.com/","_blank")
    // },
  },
  async mounted() {  
    this.participants = await api.getparticipant(this.$route.params.id);
  }
};
</script>