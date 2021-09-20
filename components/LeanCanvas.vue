<template>
  <div class="lean-canvas">
    <div class="lean-canvas__field lean-canvas__field--customer-segments">
      <div class="lean-canvas__top">
        <h4 class="lean-canvas__h">
          Customer segments
        </h4>
        <ol class="lean-canvas__ol">
          <li v-for="item in customerSegments" :key="item" class="lean-canvas__li">
            {{ item }}
          </li>
        </ol>
      </div>
      <div v-if="earlyAdopters" class="lean-canvas__bottom">
        <h5 class="lean-canvas__h">
          Early adopters:
        </h5>
        <ol class="lean-canvas__ol">
          <li v-for="item in earlyAdopters" :key="item" class="lean-canvas__li">
            {{ item }}
          </li>
        </ol>
      </div>
    </div>
    <div class="lean-canvas__field lean-canvas__field--problem">
      <div class="lean-canvas__top">
        <h4 class="lean-canvas__h">
          Problem
        </h4>
        <ol class="lean-canvas__ol">
          <li v-for="item in problem" :key="item" class="lean-canvas__li">
            {{ item }}
          </li>
        </ol>
      </div>
      <div v-if="existingAlternatives" class="lean-canvas__bottom">
        <h5 class="lean-canvas__h">
          Existing alternatives:
        </h5>
        <ol class="lean-canvas__ol">
          <li v-for="item in existingAlternatives" :key="item" class="lean-canvas__li">
            {{ item }}
          </li>
        </ol>
      </div>
    </div>
    <div class="lean-canvas__field lean-canvas__field--solution">
      <div class="lean-canvas__top">
        <h4 class="lean-canvas__h">
          Solution
        </h4>
        <ol class="lean-canvas__ol">
          <li v-for="item in solution" :key="item" class="lean-canvas__li">
            {{ item }}
          </li>
        </ol>
      </div>
      <div v-if="futureIdeas" class="lean-canvas__bottom">
        <h5 class="lean-canvas__h">
          Future:
        </h5>
        <ol class="lean-canvas__ol">
          <li v-for="item in futureIdeas" :key="item" class="lean-canvas__li">
            {{ item }}
          </li>
        </ol>
      </div>
    </div>
    <div class="lean-canvas__field lean-canvas__field--uvp">
      <div class="lean-canvas__top">
        <h4 class="lean-canvas__h">
          Unique value proposition
        </h4>
        <ol class="lean-canvas__ol">
          <li v-for="item in uvp" :key="item" class="lean-canvas__li">
            {{ item }}
          </li>
        </ol>
      </div>
      <div v-if="highLevelConcept" class="lean-canvas__bottom">
        <h5 class="lean-canvas__h">
          High-level concept:
        </h5>
        <ol class="lean-canvas__ol">
          <li v-for="item in highLevelConcept" :key="item" class="lean-canvas__li">
            {{ item }}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'customerSegments',
    'earlyAdopters',
    'problem',
    'existingAlternatives',
    'solution', 'futureIdeas',
    'uvp',
    'highLevelConcept'
  ]
}
</script>

<style lang="scss">
.lean-canvas {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  margin: 50px 0 100px;

  &__field {
    position: relative;
    border-radius: 10px;
    padding: 20px;
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

    &--customer-segments {
      box-shadow: 0 0 0 1px $blue inset;
      color: $blue;

      &::before {
        box-shadow: 15px -15px 0 15px $blue;
        content: 'face';
      }
    }

    &--problem {
      box-shadow: 0 0 0 1px $purple inset;
      color: $purple;

      &::before {
        box-shadow: 15px -15px 0 15px $purple;
        content: 'lock';
      }
    }

    &--solution {
      box-shadow: 0 0 0 1px $orange inset;
      color: $orange;

      &::before {
        box-shadow: 15px -15px 0 15px $orange;
        content: 'vpn_key';
      }
    }

    &--uvp {
      box-shadow: 0 0 0 1px $green inset;
      color: $green;

      &::before {
        box-shadow: 15px -15px 0 15px $green;
        content: 'pages';
      }
    }
  }

  &__bottom {
    margin-top: 20px;
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
      display: none;
    }
  }
}

</style>
