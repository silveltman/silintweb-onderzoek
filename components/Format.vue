<template>
  <div class="format">
    <div class="format__field">
      <h4 class="format__h">
        Pre-service
      </h4>
      <ul class="format__ul">
        <li v-for="item in pre" :key="item" class="format__li">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="format__field">
      <h4 class="format__h">
        Proces
      </h4>
      <ul class="format__ul">
        <li v-for="item in proces" :key="item" class="format__li">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="format__field">
      <h4 class="format__h">
        Eindproduct
      </h4>
      <ul class="format__ul">
        <li v-for="item in eindproduct" :key="item" class="format__li">
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="format__field">
      <h4 class="format__h">
        Post-service
      </h4>
      <ul class="format__ul">
        <li v-for="item in post" :key="item" class="format__li">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'pre',
    'proces',
    'eindproduct',
    'post'
  ]
}
</script>

<style lang="scss">
.format {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  margin: 100px 0;

  &__field {
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 0 1px $brand-color;
    overflow: hidden;
    background: $brand-color;
  }

  &__h {
    color: $bg;
    padding: 8px 15px;
    margin: 0;
    font-size: 17px;
    border-radius: 10px;
    position: relative;
  }

  &__ul {
    margin: 0;
    height: 100%;
    padding: 5px 15px 15px;
    background: $bg;
    border-radius: 10px;
  }

  &__li {
    padding: 0;

    &::before {
      display: none;
    }
  }
}

</style>
