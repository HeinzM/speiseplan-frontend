<template>
  <status-page
    :day-of-week="orderPerDay.dayOfWeek"
    :lunch="orderPerDay.meal.lunch"
    :snack="orderPerDay.meal.snack"
  />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import StatusPage from "@/components/StatusPage.vue";

export default defineComponent({
  name: "StatusPageView",
  components: { StatusPage },
  data: () => {
    return {
      orderPerDay: {
        dayOfWeek: "Freitag",
        meal: {
          lunch: true,
          snack: false,
        },
      },
    };
  },
});
</script>

<style scoped></style>
