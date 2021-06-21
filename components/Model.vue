<template>
  <div class="model">
    <div class="model__block model__block--discover">
      Discover
    </div>
    <span class="model__icon material-icons">
      trending_flat
    </span>
    <div class="model__block model__block--dream">
      Dream
    </div>
    <span class="model__icon material-icons">
      trending_flat
    </span>
    <div class="model__block model__block--design">
      Design
    </div>
    <span class="model__icon material-icons">
      trending_flat
    </span>
    <div class="model__block model__block--destiny">
      Destiny
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.model {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px 0;
  position: relative;

  &__block {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background: $brand-color;
    color: $bg;
    padding: 20px;
    font-size: 20px;
    font-weight: 700;
    border-radius: 10px;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }
  }

  &__icon {
    font-size: 32px;
  }
}
</style>
