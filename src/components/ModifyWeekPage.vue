<template>
  <h3>{{ title }}</h3>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModifyweekPage",
  props: {
    title: String,
  },
});
</script>

<style scoped></style>
