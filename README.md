# vue-with-wrapper

as `with(arg)`

## Example

```html
<template>
  <div>
    <With :e="a.b.c.d.e" :f="123" :b="a.b" :parse="parseObj()">
      <template slot-scope="{ e, f, b, parse }">
        {{e}}
        <br>
        {{f}}
        <br>
        {{b}}
        <br>
        {{parse.b}}
        {{parse.c}}
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

```

## Props

| Props | Type | Default |
| -- | -- | -- |
| tag | string | div |
