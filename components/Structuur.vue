<template>
  <div class="structuur">
    <div class="structuur__block structuur__block--content">
      Wat & hoe
    </div>
    <div class="structuur__block structuur__block--bijlage">
      Waarom
    </div>
    <div class="structuur__block structuur__block--content">
      Wat & hoe
    </div>
    <div class="structuur__block structuur__block--bijlage">
      Waarom
    </div>
    <div class="structuur__block structuur__block--content">
      Wat & hoe
    </div>
    <div class="structuur__block structuur__block--bijlage">
      Waarom
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.structuur {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px 80px;
  justify-content: space-between;
  padding: 0 50px;
  margin: 50px 0 100px;
  position: relative;

  &::before {
    content: '';
    display: block;
    position: absolute;
    height: 100%;
    width: 4px;
    left: 158px;
    background: $brand-color;
  }

  &__block {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 220px;
    height: 80px;
    font-size: 20px;
    font-weight: 700;
    border-radius: 10px;

    &--content {
      background: $brand-color;
      color: $bg;

      &::before {
        content: '';
        display: block;
        position: absolute;
        height: 0;
        width: 150px;
        left: 100%;
        border-top: 4px dashed $brand-color;
      }
    }

    &--bijlage {
      background: $bg;
      color: $brand-color;
      border: 4px solid $brand-color;
    }
  }
}

</style>
