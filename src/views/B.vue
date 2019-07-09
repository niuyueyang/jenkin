<template>
    <div>
        {{color}}--{{$attrs.color}}
        <slot name="app" :slotName="slotName"></slot>
        <button @click="changeSlot">改变slot</button>
    </div>

</template>
<script>
    export default {
        inject: ['color'],
        data(){
          return{
              slotName:'我是slot'
          }
        },
        mounted(){
            this.init();
            //console.log(this.name);//我是父组件
        },
        created(){
            console.log(this.$attrs)
        },
        methods:{
            init(){
                console.log(this.color)
                console.log(this.$attrs)
            },
            changeSlot(){
                this.slotName='改变以后slot'
            }
        }
    }
</script>
<style scoped>
</style>
