<template>
  <div class="toc">
    <h2 class="toc__h" @click="toggleToc">
      <span class="material-icons toc__icon" :class="{ closed: !showToc}">expand_less</span>
      Inhoud
    </h2>
    <ol v-show="showToc" class="toc__ol">
      <li v-for="item in newToc" :key="item.id" class="toc__li">
        <nuxt-link :to="`#${item.id}`" class="toc__link">
          {{ item.text }}
        </nuxt-link>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: ['toc'],
  data () {
    return {
      showToc: true
    }
  },
  computed: {
    newToc () {
      return this.toc.filter((item) => {
        return item.depth === 2
      })
    }
  },
  methods: {
    toggleToc () {
      this.showToc = !this.showToc
    }
  }
}
</script>

<style lang="scss">
.toc {
  margin: 15px 0 50px;

  &__h {
    display: flex;
    align-items: center;
    font-size: 17px;
    color: $brand-color;
    font-weight: 600;
    cursor: pointer;
    margin: 0;
  }

  &__icon {
    margin-right: 5px;
    color: $brand-color;
    transition: transform 0.2s ease;

    &.closed {
      transform: rotate(-180deg);
    }
  }

  &__ol {
    padding: 0;
    margin: 0;
    list-style-position: inside;
  }

  &__li {
    margin-top: 10px;
  }

  &__link {
    font-size: 17px;
    text-decoration: none;
    color: $color;

    &:hover {
      text-decoration: underline;
    }
  }
}

</style>
