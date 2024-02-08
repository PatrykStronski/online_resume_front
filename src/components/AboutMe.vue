<template>
  <h3> Welcome </h3>
  <div class="about-container">
    <div class="about">
    </div>
    <img src="assets/MeTallin.jpg" als="<photo>" />
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
.about-container {
  display: flex;
  align-content: space-between;
}

.about-container img {
  width: 200px;
  height: 200px;
}
</style>
