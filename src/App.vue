<template>
    <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      variant="dark"
    >
      <b-navbar-brand>LensKart Solutions</b-navbar-brand>
    </b-navbar>
    <router-view></router-view>
    </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>

.navbar.navbar-dark.bg-dark{
    background-color: #AABB55!important;
    font-family: Century Gothic;
}

</style>
