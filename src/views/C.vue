<template>
    <div></div>
</template>
<script>
    export default {
      inject:['name'],
      mounted(){
          console.log(this.name);
      }
    }
</script>

<style scoped>

</style>
