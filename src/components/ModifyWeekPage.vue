<template>
  <h3>{{ title }}</h3>
  <div class="container">
    <div class="row">
      <div class="col-lg-2 col-md-6"></div>
      <div class="col-lg-2 col-md-6">Montag</div>
      <div class="col-lg-2 col-md-6">Dienstag</div>
      <div class="col-lg-2 col-md-6">Mittwoch</div>
      <div class="col-lg-2 col-md-6">Donnerstag</div>
      <div class="col-lg-2 col-md-6">Freitag</div>
    </div>
    <div class="row">
      <div v-for="row in gridRows" :key="row" class="row">
        <div v-if="row === 2" class="col-lg-2 col-md-6">Mittag</div>
        <div v-else-if="row === 3" class="col-lg-2 col-md-6">Vesper</div>
        <div v-for="col in gridColumns" :key="col" class="col-lg-2 col-md-6">
          <div class="form-group">
            <select
              :id="'select-' + row + '-' + col"
              class="form-control"
              v-model="gridData[row][col].selection"
            >
              <option
                v-for="option in selectOptions"
                :key="option.value"
                :value="option.value"
              >
                {{ option.text }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-3">
    <button class="btn btn-primary" @click="submitData">
      Auswahl bestätigen
    </button>
    <button class="btn btn-danger" @click="resetData">
      Auswahl zurücksetzen
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { GridData } from "@/interfaces/griddata";
import router from "@/router";

export default defineComponent({
  name: "ModifyweekPage",
  props: {
    title: String,
  },
  data: () => {
    return {
      gridRows: [2, 3] as number[],
      gridColumns: [2, 3, 4, 5, 6] as number[],
      gridData: {} as GridData,
      selectOptions: [
        { value: true, text: "Ja" },
        { value: false, text: "Nein" },
      ],
    };
  },
  created() {
    this.initializeGridData();
  },
  methods: {
    initializeGridData() {
      for (const row of this.gridRows) {
        //this.$set(this.gridData, row, {});
        this.gridData[row] = reactive({});
        for (const col of this.gridColumns) {
          //this.$set(this.gridData[row], col, {
          //  selection: false,
          //});
          this.gridData[row][col] = reactive({
            selection: false,
          });
        }
      }
    },
    submitData() {
      const mappedData: GridData = {};
      for (const row of this.gridRows) {
        mappedData[row] = {};
        for (const col of this.gridColumns) {
          mappedData[row][col] = {
            selection: this.gridData[row][col].selection.valueOf(),
          };
        }
      }
      console.log(mappedData);
      this.$emit("dataSubmitted", this.gridData);
      router.push("/");
    },
    resetData() {
      this.initializeGridData();
    },
  },
});
</script>

<style scoped>
.btn {
  margin-left: 5px;
  margin-right: 5px;
  min-width: 185px;
}
</style>
