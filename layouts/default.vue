<template>
  <div class="wrapper">
    <Nav :current-section="currentSection" />
    <Nuxt class="wrapper__main" />
    <aside class="wrapper__aside" />
  </div>
</template>

<script>
// export default {
//   data () {
//     return {
//       currentSection: null
//     }
//   },
//   watch: {
//     $route () {
//       this.startObserver()
//       console.log('route changed')
//     }
//   },
//   mounted () {
//     this.startObserver()
//   },
//   methods: {
//     startObserver () {
//       const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//           this.currentSection = entry.target.id
//           console.log(this.currentSection)
//         })
//       })
//       const targets = document.querySelectorAll('h2')
//       targets.forEach((item) => {
//         observer.observe(item)
//       })
//     }
//   }
// }
</script>

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
