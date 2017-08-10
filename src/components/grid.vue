<template>
  <div>
    <grid>
      <grid-item link="/footer" :label="('lalala')">
      </grid-item>
      <grid-item link="/" :label="('Go to Cell')">
      </grid-item>
      <grid-item link="/component/cell" @on-item-click="onItemClick">
        <span slot="label">{{('Go to Cell')}}</span>
      </grid-item>
    </grid>
  </div>
</template>



<script>
import { Grid, GridItem} from 'vux'

export default {
  components: {
    Grid,
    GridItem,
  },
  methods: {
    onItemClick () {
      console.log('on item click')
    }
  }
}
</script>

<style scoped>
.grid-center {
  /* display: block;
  text-align: center; */
}
</style>