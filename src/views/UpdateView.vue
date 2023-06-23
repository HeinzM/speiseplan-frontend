<template>
  <ModifyWeekPage :title="title" @dataSubmitted="convertData" />
</template>

<script lang="ts">
import ModifyWeekPage from "@/components/ModifyWeekPage.vue";
import { defineComponent } from "vue";
import { GridData } from "@/interfaces/griddata";
export default defineComponent({
  components: { ModifyWeekPage },
  data: () => {
    return {
      title: "Essensbestellung aktualisieren",
    };
  },
  methods: {
    convertData(gridData: GridData) {
      for (const row of [2, 3]) {
        for (const col of [2, 3, 4, 5, 6]) {
          console.log(gridData[row][col].selection);
        }
      }
    },
  },
});
</script>

<style scoped></style>
