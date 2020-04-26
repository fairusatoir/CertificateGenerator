import Vue from 'vue';
import Router from 'vue-router';
import Training from './views/training';
import trainingNew from './views/trainingNew.vue';
import trainingEdit from './views/trainingEdit.vue';
import trainingShow from './views/trainingShow';

import participant from './views/participant.vue';
import participantNew from './views/participantNew.vue';
import participantEdit from './views/participantEdit.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/training'
    },
    {
      path: '/training',
      name: 'training',
      component: Training
    },
    {
      path: '/training/new',
      name: 'new-training',
      component: trainingNew
    },
    {
      path: '/training/edit/:id',
      name: 'edit',
      component: trainingEdit
    },{
      path: '/training/:id',
      name: 'show',
      component: trainingShow
    },
// =======================================================    
    {
      path: '/participant/:id',
      name: 'Participant',
      component: participant
    },
    {
      path: '/participant/new/:id',
      name: 'new-participant',
      component: participantNew
    },
    {
      path: '/participant/edit/:id',
      name: 'edit-participant',
      component: participantEdit
    }
   
  ]
});