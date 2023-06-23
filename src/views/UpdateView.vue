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
      console.log(gridData);
    },
  },
});
</script>

<style scoped></style>
