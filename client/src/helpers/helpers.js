import axios from 'axios';
import Vue from 'vue';
import VueFlashMessage from 'vue-flash-message';
import 'vue-flash-message/dist/vue-flash-message.min.css';

Vue.use(VueFlashMessage, {
  messageOptions: {
    timeout: 3000,
    pauseOnInteract: true
  }
});

const vm = new Vue();
const baseURL = 'http://localhost:3000/training/';
const baseURLnew = 'http://localhost:3000/training/new/';
const baseURLedit = 'http://localhost:3000/training/edit/';
const baseURL2 = 'http://localhost:3000/participant/';
const baseURL2edit = 'http://localhost:3000/participant/edit/';
const baseURL2new = 'http://localhost:3000/participant/new/';

const handleError = fn => (...params) =>
  fn(...params).catch(error => {
    vm.flash(`${error.response.status}: ${error.response.statusText}`, 'error');
  });

export const api = {
  getatraining: handleError(async id => {
    const res = await axios.get(baseURL + id);
    return res.data;
  }),
  gettrainings: handleError(async () => {
    const res = await axios.get(baseURL);
    return res.data;
  }),
  deletetraining: handleError(async id => {
    const res = await axios.delete(baseURL + id);
    return res.data;
  }),
  createtraining: handleError(async payload => {
    const res = await axios.post(baseURLnew, payload);
    return res.data;
  }),
  updatetraining: handleError(async payload => {
    console.log(payload);
    const res = await axios.put(baseURLedit + payload._id, payload);
    console.log(payload);
    return res.data;
  }),

  //   ===================================================
//   get all participant
  gettraining: handleError(async id => {
    const res = await axios.get(baseURL2 + id);
    return res.data;
  }),
  createparticipant: handleError(async (id, payload) => {
    const res = await axios.post(baseURL2new + id, payload);
    return res.data;
  }),deleteparticipant: handleError(async id => {
    const res = await axios.delete(baseURL2 + id);
    return res.data;
  }),
  updateparticipant: handleError(async payload => {
    const res = await axios.put(baseURL2edit + payload._id, payload);
    return res.data;
  }),
};