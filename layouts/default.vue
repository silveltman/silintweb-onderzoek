<template>
  <div class="wrapper">
    <Nav />
    <Nuxt class="wrapper__main" />
    <div class="alert">
      Deze website is gemaakt voor een groter scherm. Open deze pagina op een laptop of computer.
    </div>
  </div>
</template>

<style lang="scss">
.wrapper {
  box-sizing: content-box;
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
}

.nuxt-content {
  position: relative;
}

.alert {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $bg-dark;
  color: $color-light;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;

  @media only screen and (min-width: 1200px) {
    display: none;
  }
}

</style>
