<template>
  <router-link tag="p" :to="to" exact>
    <a>{{title}}</a>
  </router-link>
</template>

<script>

  export default {
    props: ['to', 'title']
  }
</script>
