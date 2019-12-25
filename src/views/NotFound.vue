<template>
  <div>
    <nevheader></nevheader>
    <div>{{msg}}</div>
    <nvefooter></nvefooter>
  </div>
</template>

<script>
import nevheader from '../components/header'
import nvefooter from '../components/footer'
export default {
  data () {
    return {
      msg: '404'
    }
  },
  comments: { nevheader, nvefooter }
}
</script>
