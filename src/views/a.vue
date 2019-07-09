<template>
  <div>
    {{dataColor}}
    <button @click="changeColor" >改变</button>
    <B :color="dataColor">
      <div slot="app" slot-scope="p">slot--{{p.slotName}}</div>
    </B>
  </div>
</template>

<script>
  import B from './B.vue'
    export default {
        provide(){
            return{
              color:this.$store.state.color
          }

        },
        data(){
          return{
              dataColor:'blue'
          }
        },
        methods:{
            changeColor(){
                this.dataColor='red'
                this.$store.dispatch('changeSync','yellow')
            }
        },
        components:{
            B:B,
        }
    }
</script>

<style scoped>

</style>
