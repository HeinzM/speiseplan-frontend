<template>
  <h2>{{ dayOfWeek }}</h2>
  <h3>Mittag</h3>
  <div class="showpic">
    <img
      v-if="lunch"
      :src="require('@/assets/greenhook.png')"
      class="showpic"
      alt="bestellt"
    />
    <img
      v-else
      :src="require('@/assets/redcross.png')"
      class="showpic"
      alt="nichtbestellt"
    />
  </div>
  <h3>Vesper</h3>
  <div class="showpic">
    <img
      v-if="snack"
      :src="require('@/assets/greenhook.png')"
      class="showpic"
      alt="bestellt"
    />
    <img
      v-else
      :src="require('@/assets/redcross.png')"
      class="showpic"
      alt="nichtbestellt"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "StatusPage",
  props: {
    dayOfWeek: String,
    snack: Boolean,
    lunch: Boolean,
  },
});
</script>

<style scoped>
.showpic {
  height: 60px;
  width: 60px;
  margin-left: auto;
  margin-right: auto;
}
</style>
