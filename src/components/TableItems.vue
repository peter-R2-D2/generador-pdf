<template>
  <table class="table-items">
  <thead class="table-items__header">
    <tr class="table-items__row">
      <th v-for="(header, index) in headerTable" :key="index" :class="header.class">
        {{ header.name }}
      </th>
    </tr>
  </thead>

  <tbody class="table-items__body">
    <tr v-if="items.length === 0" class="table-items__empty">
      <td colspan="4">No hay productos agregados</td>
    </tr>

    <tr v-for="(item, index) in items" :key="index" class="table-items__content">
      <td class="text-center">{{ item.quantity }}</td>
      <td class="text-start">{{ item.product }}</td>
      <td class="text-end">{{ item.price }}</td>
      <td class="text-end">{{ item.total }}</td>
    </tr>
  </tbody>
</table>
</template>

<script setup>
const definedProps = defineProps({
  headerTable: {
    type: Array,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});
</script>

<style>
.table-items {
  width: 100%;
  border-collapse: collapse;
}

.table-items__header,
.table-items__body {
  width: 100%;
  display: block;
}

.table-items__row {
  display: grid;
  width: 100%;
  grid-template-columns: 10% 60% 15% 15%;
  background-color: #0d0b2b;
  color: white;
  align-items: center;
}

.table-items__content {
  display: grid;
  width: 100%;
  grid-template-columns: 10% 60% 15% 15%;
  background-color: #f5f5f5;
  align-items: center;
}

.table-items th,
.table-items td {
  box-sizing: border-box;
  padding: 8px;
}

.table-items__empty td {
  display: block;
  width: 100%;
  text-align: center;
}
</style>