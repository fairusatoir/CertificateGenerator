<template>
  <div id="app">
    <div class="ui inverted segment navbar">
      <div class="ui center aligned container">
        <div class="ui large secondary inverted pointing menu compact">
          
          <router-link to="/training" exact class="item">
            <i class="tasks icon"></i> Training
          </router-link>

          <router-link to="/training/new" class="item">
            <i class="plus circle icon"></i> New Training
          </router-link>
                
        </div>
      </div>
    </div>

    <div class="container-menu">
      <div class="ui one column grid">
        <div class="column">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  // data: function(){
  //   return {
  //     Statetraining: true
  //   }
  // }
};
</script>

<style>
.container-menu{
  font-size: 17px;
  /* margin: auto; */
}
.ui.container{
  font-size: 17px;
}

#app > div.navbar {
  margin-bottom: 1.5em;
}
.myFlash {
  width: 250px;
  margin: 10px;
  position: absolute;
  top: 50;
  right: 0;
}
input {
  width: 300px;
}
div.label {
  width: 120px;
}
div.input {
  margin-bottom: 10px;
}
button.ui.button {
  margin-top: 15px;
  display: block;
}
</style>