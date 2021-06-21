<template>
  <aside class="aside">
    <img src="@/assets/img/logo.svg" alt="" class="aside__logo">
    <nav class="nav">
      <div v-for="doc in docs" :key="doc.slug" class="nav__item">
        <h3 class="nav__h">
          <nuxt-link class="nav__link" :to="`/${doc.slug}`">
            <span class="material-icons nav__icon" :class="{ open: $nuxt.$route.params.slug === doc.slug }">expand_less</span>
            {{ doc.title }}
          </nuxt-link>
        </h3>
        <ol v-show="$nuxt.$route.params.slug === doc.slug" class="nav__ol">
          <li v-for="item in filterToc(doc.toc)" :key="item.id" class="nav__li">
            <nuxt-link class="nav__link" :to="`/${doc.slug}#${item.id}`">
              {{ item.text }}
            </nuxt-link>
          </li>
        </ol>
      </div>
    </nav>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      docs: null
    }
  },
  async fetch () {
    this.docs = await this.$content().sortBy('order').fetch()
  },
  methods: {
    filterToc (toc) {
      return toc.filter((item) => {
        return item.depth === 2
      })
    }
  }
}
</script>

<style lang="scss">

.aside {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 280px;
  background: $bg-dark;
  color: $color-light;
  overflow-y: auto;

  &__logo {
    padding: 20px;;
  }
}

.nav {
  padding: 30px 0;

  &__item {
    & + & {
      margin-top: 20px;
    }
  }

  &__h {
    font-size: 16px;
    margin: 0;
  }

  &__link {
    display: flex;
    align-items: center;
    color: $color-light;
    text-decoration: none;
    font-size: 16px;
    padding: 10px 20px;

    &:hover {
      background: $bg-dark-2;
    }
  }

  &__icon {
    color: $color-light;
    margin-right: 10px;
    transition: transform 0.2s ease;

    &:hover {
      background: $color;
      color: $brand-color;
    }

    &.open {
      transform: rotate(-180deg);
    }
  }

  &__ol {
    margin: 0;
    list-style: none;
  }

  &__li {
    margin-left: 34px;
  }
}

.nuxt-link-active {
  color: $brand-color;
}
</style>
