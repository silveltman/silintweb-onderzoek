<template>
  <div>
    <h1>
      {{ doc.title }}
    </h1>

    <Toc :toc="doc.toc" />

    <nuxt-content :document="doc" />

    <div class="buttons">
      <nuxt-link v-if="prev" class="buttons__button buttons__button--prev" :to="`/${prev.slug}`">
        Vorige
      </nuxt-link>
      <nuxt-link v-if="next" class="buttons__button buttons__button--next" :to="`/${next.slug}`">
        Volgende
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Toc from '@/components/Toc.vue'

export default {
  components: { Toc },
  async asyncData ({ $content, params }) {
    const doc = await $content(params.slug || 'introductie').fetch()
    const [prev, next] = await $content()
      .sortBy('order')
      .surround(params.slug)
      .fetch()

    return {
      doc,
      prev,
      next
    }
  }
}
</script>

<style lang="scss">
.buttons {
  display: flex;
  margin-top: 100px;

  &__button {
    color: $gray-dark;
    font-size: 28px;
    font-weight: 700;
    padding: 10px 20px;
    text-decoration: none;
    width: 200px;
    background: 0;
    border: 1px solid $gray-dark;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: center;

    &--next {
      margin-left: auto;
    }

    &:hover {
      color: $brand-color;
      border-color: $brand-color;
    }
  }
}

</style>
