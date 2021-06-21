<template>
  <div class="bijlage">
    <button class="bijlage__button" @click="toggleShowModal">
      {{ text }}
    </button>
    <div class="modal">
      <transition name="fade">
        <div v-if="showModal" class="modal__backdrop" @click="toggleShowModal" />
      </transition>
      <transition name="slide">
        <div v-if="showModal" class="modal__container">
          <div class="modal__header">
            <button class="modal__btn" @click="toggleShowModal">
              Sluiten
            </button>
          </div>
          <div class="modal__content">
            <h2>{{ text }}</h2>
            <slot />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: ['text'],
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    toggleShowModal () {
      this.showModal = !this.showModal
    }
  }
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s cubic-bezier(0.19, 0.53, 0.4, 1);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.35s cubic-bezier(0.19, 0.53, 0.4, 1);
}

.slide-enter,
.slide-leave-to {
  transform: translate(0, 100%);

  @include media(3) {
    transform: translate(100%, 0);
  }
}

.bijlage {
  &__button {
    display: flex;
    align-items: center;
    text-align: left;
    width: 280px;
    position: absolute;
    right: -280px - 50px;
    padding: 5px 20px;
    font-weight: 300;
    font-style: italic;
    font-size: 16px;
    background: 0;
    border: 0;

    &::before {
      content: 'Lees meer';
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      height: 46px;
      width: 5px;
      left: 0;
      border-radius: 0 3px 3px 0;
      background: $brand-color;
      color: $brand-color;
      font-size: 16px;
      transition: all 0.26s ease;
      font-weight: 700;
      font-style: normal;
      white-space: nowrap;
      cursor: pointer;
    }

    &:hover {
      &::before {
        color: $bg;
        width: 280px;
      }
    }
  }
}

.modal {
  position: fixed;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 9;

  &__backdrop {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    pointer-events: all;
  }

  &__container {
    position: absolute;
    width: 100%;
    background: $bg;
    border-radius: 30px 30px 0 0;
    pointer-events: all;
    max-width: 800px;
    overflow: hidden;

    @include media(3) {
      right: 0;
      top: 0;
      bottom: 0;
      border-radius: 0;
      width: auto;
    }
  }

  &__header {
    display: grid;
    grid-template-columns: 160px 1fr 160px;
    align-items: flex-end;
    align-items: center;
    border-bottom: 1px solid $gray-light;
    // background: $bg-2;
  }

  &__h {
    grid-column: 2;
    text-align: center;
    margin: 0;
    font-size: 20px;
  }

  &__btn {
    grid-column: 3;
    background: 0;
    border: 1px solid $gray-light;
    color: $brand-color;
    padding: 10px 20px;
    font-weight: 600;
    font-size: 17px;
    border-radius: 0 30px 0 10px;
    cursor: pointer;

    @include media(3) {
      border-radius: 0;
      grid-column: 1;
      grid-row: 1;
    }

    &:hover {
      border: 1px solid $brand-color;
    }
  }

  &__content {
    padding: 20px;
    position: relative;
    overflow-y: auto;
    max-height: 85vh;

    @include media(3) {
      max-width: 680px;
      max-height: 100vh;
      padding: 50px;
    }

    p {
      font-weight: 400;
      font-size: 17px;
    }
  }
}

</style>
