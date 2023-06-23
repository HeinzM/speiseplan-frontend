<template>
  <ModifyWeekPage :title="title" />
</template>

<script lang="ts">
import ModifyWeekPage from "@/components/ModifyWeekPage.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { ModifyWeekPage },
  data: () => {
    return {
      title: "Essensbestellung aktualisieren",
    };
  },
});
</script>

<style scoped></style>
