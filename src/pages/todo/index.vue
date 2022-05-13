<template>
  <div class="todo-list">
    <van-cell-group inset>
      <van-cell
        v-for="percentage in progressList"
        :key="percentage.id"
        :title="percentage.label"
        value="内容"
      >
        <template #value> {{ percentage.value }}% </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const progressList = ref([
  {
    id: 1,
    label: "图表组件",
    value: 10,
  },
  {
    id: 2,
    label: "表单功能",
    value: 0,
  },
]);
</script>

<style scoped lang="scss">
.todo-list {
  padding: 20px;
}
</style>
