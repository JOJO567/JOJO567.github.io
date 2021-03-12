<template>
  <div :id="this.iid"></div>
</template>



<script>
  import { autoInput } from "../public/js/typing";

  export default {
    props: {
      iid: '',
      des: ''
    },
    data() {
      return {}
  },
  mounted() {
    autoInput(this.iid,this.des)
  }
}

</script>




<style>

</style>