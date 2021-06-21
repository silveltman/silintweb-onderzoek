<template>
  <div class="wrapper">
    <Nav />
    <Nuxt class="wrapper__main" />
  </div>
</template>

<style lang="scss">
.wrapper {
  box-sizing: content-box;
  position: relative;
  padding: 100px 330px;
  max-width: 680px;
  margin: 0 auto;
  // border-right: 2px solid $gray-light;

  &::before {
    content: '';
    position: absolute;
    display: block;
    height: 100%;
    width: 2px;
    background: $gray-light;
    right: 280px;
  }

  .nuxt-content {
    position: relative;
  }
}

</style>
