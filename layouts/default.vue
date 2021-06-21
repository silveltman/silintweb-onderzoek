<template>
  <div class="wrapper">
    <Nav />
    <Nuxt class="wrapper__main" />
    <aside class="wrapper__aside" />
  </div>
</template>

<style lang="scss">
.wrapper {
  padding: 100px 0 100px 330px;
  margin: 0 auto;
  display: grid;
  justify-content: center;
  grid-template-columns: minmax(510px, 680px) 280px;
  grid-gap: 0 50px;

  &__aside {
    border-left: 2px solid $gray-light;
  }
}

</style>
