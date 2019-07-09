<template>
    <div></div>
</template>
<script>
    export default {
      inject:['name'],
      mounted(){
          console.log(this.name)
		  console.log(111);
      }
    }
</script>

<style scoped>

</style>
