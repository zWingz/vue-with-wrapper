<template>
  <div>
    <With :e="a.b.c.d.e" :f="123" :b="a.b" :parse="parseObj()">
      <template #default="{ e, f, b, parse }">
          {{e}}
          <br>
          {{f}}
          <br>
          {{b}}
          <br>
          <span>
            {{parse.b}}
          </span>
          <br>
          {{parse.c}}
          <br>
          {{parse.d}}
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
  },
  methods: {
    parseObj() {
      return {
        b: {
          b1: 12
        },
        c: {
          c1: 12
        },
        d: 123
      }
    }
  }
}
</script>
