<script setup>
import ActionsPanel from './components/ActionsPanel.vue';
import AddItems from './components/AddItems.vue';
import DataModal from './components/DataModal.vue';
import BodyPdf from './components/BodyPdf.vue';
import { useCotizadorStore } from './store/cotizador';

const store = useCotizadorStore();

function fmt(val) {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(val);
}
</script>

<template>
  <div class="app">
    <h1 class="app-title">Generador de Cotizaciones</h1>

    <ActionsPanel />

    <!-- Lista editable de items (fuera del PDF) -->
    <div v-if="store.items.length > 0" class="items-editor">
      <table class="edit-table">
        <thead>
          <tr>
            <th>Cant.</th>
            <th>Descripción</th>
            <th>P. Unitario</th>
            <th>Importe</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, i) in store.items" :key="i">
            <td class="text-center">{{ item.quantity }}</td>
            <td>{{ item.product }}</td>
            <td class="text-end">{{ fmt(item.price) }}</td>
            <td class="text-end">{{ fmt(item.total) }}</td>
            <td class="text-center">
              <v-btn icon="mdi-pencil" size="x-small" variant="text" color="primary" @click="store.editItem(i)" />
              <v-btn icon="mdi-delete" size="x-small" variant="text" color="error" @click="store.removeItem(i)" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="preview-label">Vista previa del PDF</div>
    <BodyPdf />

    <AddItems />
    <DataModal />
  </div>
</template>

<style>
* { box-sizing: border-box; }

body {
  background-color: #f4f4f8;
  margin: 0;
}

.app {
  max-width: 860px;
  margin: 0 auto;
  padding: 24px 20px;
}

.app-title {
  color: #0d0b2b;
  margin-bottom: 20px;
}

.items-editor {
  margin-bottom: 24px;
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
}

.edit-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 13px;
}

.edit-table th {
  background-color: #0d0b2b;
  color: white;
  padding: 8px 12px;
  text-align: left;
}

.edit-table td {
  padding: 8px 12px;
  border-bottom: 1px solid #eee;
}

.edit-table tr:last-child td {
  border-bottom: none;
}

.preview-label {
  font-size: 12px;
  font-weight: bold;
  color: #888;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
}

.m-0 { margin: 0; }
.text-start { text-align: start; }
.text-center { text-align: center; }
.text-end { text-align: end; }
</style>
