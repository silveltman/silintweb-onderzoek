<template>
  <div class="lean-canvas-empty">
    <div class="lean-canvas-empty__field lean-canvas-empty__field--customer-segments">
      <h4 class="lean-canvas-empty__h">
        Customer segments
      </h4>
      <h5 class="lean-canvas-empty__h lean-canvas-empty__h--small">
        Early adaptors:
      </h5>
    </div>
    <div class="lean-canvas-empty__field lean-canvas-empty__field--problem">
      <h4 class="lean-canvas-empty__h">
        Problem
      </h4>
      <h5 class="lean-canvas-empty__h lean-canvas-empty__h--small">
        Existing alternatives:
      </h5>
    </div>
    <div class="lean-canvas-empty__field lean-canvas-empty__field--solution">
      <h4 class="lean-canvas-empty__h">
        Solution
      </h4>
      <h5 class="lean-canvas-empty__h lean-canvas-empty__h--small">
        Future ideas:
      </h5>
    </div>
    <div class="lean-canvas-empty__field lean-canvas-empty__field--uvp">
      <h4 class="lean-canvas-empty__h">
        Unique value proposition
      </h4>
      <h5 class="lean-canvas-empty__h lean-canvas-empty__h--small">
        High-level concept:
      </h5>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
.lean-canvas-empty {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin: 100px 0;

  &__field {
    border-radius: 10px;
    padding: 10px;
    display: grid;
    grid-template-rows: 1fr 1fr;
    height: 300px;
    transition: transform 0.25s ease;

    &:hover {
      transform: scale(1.08);
    }

    &--customer-segments {
      background: $blue;
    }

    &--problem {
      background: $purple;
    }

    &--solution {
      background: $orange;
    }

    &--uvp {
      background: $green;
    }
  }

  &__h {
    color: $bg;
    margin: 0;
    font-size: 17px;

    &--small {
      font-size: 15px;
    }
  }
}

</style>
