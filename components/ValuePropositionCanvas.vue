<template>
  <div class="vpc">
    <div class="vpc__field vpc__field--customer-jobs">
      <h4 class="vpc__h">
        Customer Jobs
      </h4>
      <ol class="vpc__ol">
        <li v-for="item in customerJobs" :key="item" class="vpc__li">
          {{ item }}
        </li>
      </ol>
    </div>
    <div class="vpc__field vpc__field--pains">
      <h4 class="vpc__h">
        Pains
      </h4>
      <ol class="vpc__ol">
        <li v-for="item in pains" :key="item" class="vpc__li">
          {{ item }}
        </li>
      </ol>
    </div>
    <div class="vpc__field vpc__field--gains">
      <h4 class="vpc__h">
        Gains
      </h4>
      <ol class="vpc__ol">
        <li v-for="item in gains" :key="item" class="vpc__li">
          {{ item }}
        </li>
      </ol>
    </div>
    <div class="vpc__field vpc__field--products-services">
      <h4 class="vpc__h">
        Products & Services
      </h4>
      <ol class="vpc__ol">
        <li v-for="item in productsServices" :key="item" class="vpc__li">
          {{ item }}
        </li>
      </ol>
    </div>
    <div class="vpc__field vpc__field--pain-relievers">
      <h4 class="vpc__h">
        Pain Relievers
      </h4>
      <ol class="vpc__ol">
        <li v-for="item in painRelievers" :key="item" class="vpc__li">
          {{ item }}
        </li>
      </ol>
    </div>
    <div class="vpc__field vpc__field--gain-creators">
      <h4 class="vpc__h">
        Gain Creators
      </h4>
      <ol class="vpc__ol">
        <li v-for="item in gainCreators" :key="item" class="vpc__li">
          {{ item }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'customerJobs',
    'pains',
    'gains',
    'productsServices',
    'painRelievers',
    'gainCreators'
  ]
}
</script>

<style lang="scss">
.vpc {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  margin: 50px 0 100px;

  &__field {
    position: relative;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    &::before {
      font-family: 'Material Icons';
      color: $bg;
      font-feature-settings: 'liga';
      font-size: 19px;
      display: flex;
      justify-content: flex-end;
      padding: 6px 9px;
      position: absolute;
      top: -5px;
      right: -5px;
      height: 100px;
      width: 100px;
      border-radius: 0 100px 0 0;
    }

    &--customer-jobs {
      box-shadow: 0 0 0 1px $purple inset;
      color: $purple;

      &::before {
        box-shadow: 15px -15px 0 15px $purple;
        content: 'check_circle';
      }
    }

    &--pains {
      box-shadow: 0 0 0 1px $red inset;
      color: $red;

      &::before {
        box-shadow: 15px -15px 0 15px $red;
        content: 'sentiment_very_dissatisfied';
      }
    }

    &--gains {
      box-shadow: 0 0 0 1px $green inset;
      color: $green;

      &::before {
        box-shadow: 15px -15px 0 15px $green;
        content: 'sentiment_satisfied_alt';
      }
    }

    &--products-services {
      box-shadow: 0 0 0 1px $orange inset;
      color: $orange;

      &::before {
        box-shadow: 15px -15px 0 15px $orange;
        content: 'category';
      }
    }

    &--pain-relievers {
      box-shadow: 0 0 0 1px $blue inset;
      color: $blue;

      &::before {
        box-shadow: 15px -15px 0 15px $blue;
        content: 'medication';
      }
    }

    &--gain-creators {
      box-shadow: 0 0 0 1px $green inset;
      color: $green;

      &::before {
        box-shadow: 15px -15px 0 15px $green;
        content: 'trending_up';
      }
    }
  }

  &__h {
    margin: 0;
  }

  &__ol {
    margin: 0;
  }

  &__li {
    color: $color;

    &::before {
      background: $bg !important;
    }
  }
}
</style>
