<template>
  <div class="vpc-empty">
    <div class="vpc-empty__side vpc-empty__side--customer-profile">
      <div class="vpc-empty__field vpc-empty__field--gains">
        <span class="material-icons vpc-empty__icon">sentiment_satisfied_alt</span>
        Gains
      </div>
      <div class="vpc-empty__field vpc-empty__field--pains">
        <span class="material-icons vpc-empty__icon">sentiment_very_dissatisfied</span>
        Pains
      </div>
      <div class="vpc-empty__field vpc-empty__field--jobs">
        <span class="material-icons vpc-empty__icon">check_circle</span>
        Customer Jobs
      </div>
      <div class="vpc-empty__middle material-icons">
        person
      </div>
    </div>
    <div class="vpc-empty__side vpc-empty__side--value-map">
      <div class="vpc-empty__field vpc-empty__field--gain-creators">
        <span class="material-icons vpc-empty__icon">trending_up</span>
        Gain Creators
      </div>
      <div class="vpc-empty__field vpc-empty__field--pain-relievers">
        <span class="material-icons vpc-empty__icon">medication</span>
        Pain Relievers
      </div>
      <div class="vpc-empty__field vpc-empty__field--products-services">
        <span class="material-icons vpc-empty__icon">category</span>
        Products & Services
      </div>
      <div class="vpc-empty__middle material-icons">
        redeem
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.vpc-empty {
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 50px 0 100px;

  &::before,
  &::after {
    content: 'trending_flat';
    font-family: Material Icons;
    font-size: 42px;
    position: absolute;
    color: $color;
    justify-self: center;
    align-self: center;
    transform: rotate(90deg);
  }

  &::after {
    transform: rotate(-90deg);
  }

  &__side {
    height: 500px;
    width: 500px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    color: $bg;
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    &--customer-profile {
      border-radius: 100%;
      margin: 0 0 100px;
    }
  }

  &__field {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 18px;
    font-weight: 600;

    &--jobs {
      grid-column: 1 / 3;
      grid-row: 1;
      background: purple;
      clip-path: polygon(50% 100%, 0 0, 100% 0);
      padding-bottom: 40px;
    }

    &--gains {
      grid-column: 2;
      grid-row: 1 / 3;
      background: $green;
      padding-top: 125px;
    }

    &--pains {
      grid-column: 1;
      grid-row: 1 / 3;
      background: $red;
      padding-top: 125px;
    }

    &--products-services {
      grid-column: 1 / 3;
      grid-row: 2;
      background: $orange;
      clip-path: polygon(50% 0, 0 100%, 100% 100%);
      padding-top: 40px;
    }

    &--gain-creators {
      grid-column: 2;
      grid-row: 1 / 3;
      background: $green;
      padding-bottom: 240px;
    }

    &--pain-relievers {
      grid-column: 1;
      grid-row: 1 / 3;
      background: $blue;
      padding-bottom: 240px;
    }
  }

  &__icon {
    font-size: 38px;
    margin: 0 0 5px;
  }

  &__middle {
    font-size: 44px;
    color: $color-light;
    background: $bg-dark;
    padding: 20px;
    justify-self: center;
    align-self: center;
    position: absolute;
    border-radius: 100%;
  }
}

</style>
