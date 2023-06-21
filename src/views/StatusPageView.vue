<template>
  <status-page day-of-week="Dienstag" :lunch="true" :snack="true" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import StatusPage from "@/components/StatusPage.vue";

export default defineComponent({
  name: "StatusPageView",
  components: { StatusPage },
});
</script>

<style scoped></style>
