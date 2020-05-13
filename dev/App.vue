<template>
  <div>
    <With :e="a.b.c.d.e" :f="123" :b="a.b">
      <template slot-scope="{ e, f, b }">
        {{e}}
        <br>
        {{f}}
        <br>
        {{b}}
      </template>
    </With>
  </div>
</template>

<script>
import With from '../src'
export default {
  components: {
    With
  },
  data() {
    return {
      a: {
        b: {
          c: {
            d: {
              e: 1
            }
          }
        }
      }
    }
  }
}
</script>

<style>

</style>
