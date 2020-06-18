# vue-with-wrapper

A object deconstruction in `Vue`

[CodeSandbox](https://codesandbox.io/s/vue-with-wrapper-demo-96i3f)

**Notice**

It is a `functional` component

## Example

### Pass any props

```html
<template>
  <div>
    <with :e="a.b.c.d.e" :f="123" :b="a.b" :parse="parseObj()">
      <template #default="{ e, f, b, parse }">
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
    </with>
  </div>
</template>
```

### Pass object with v-bind

```html
<template>
  <div>
    <with v-bind="someData">
      <template #default="{ data_1, data_2, data_3 }">
        {{data_1}}
        {{data_2}}
      </template>
    </with>
  </div>
</template>
<!-- someData = { data_1: 1, data_2: 2, data_3: 3} -->
```
