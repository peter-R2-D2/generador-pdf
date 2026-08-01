<template>
  <v-dialog v-model="store.showModal" max-width="500">
    <v-card :title="store.editingIndex !== null ? 'Editar producto' : 'Agregar producto'">
      <v-card-text>
        <v-text-field v-model="store.newItem.product" label="Descripción del producto" density="compact" />
        <v-text-field v-model.number="store.newItem.quantity" label="Cantidad" type="number" min="1" density="compact" />
        <v-text-field v-model.number="store.newItem.price" label="Precio unitario" type="number" min="0" prefix="$" density="compact" />
        <p class="preview-total">Importe: {{ fmt(store.newItem.quantity * store.newItem.price) }}</p>
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn @click="cancel">Cancelar</v-btn>
        <v-btn color="primary" :disabled="!store.newItem.product" @click="store.addItem()">
          {{ store.editingIndex !== null ? 'Guardar' : 'Agregar' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { useCotizadorStore } from '@/store/cotizador';
const store = useCotizadorStore();

function cancel() {
  store.showModal = false;
  store.editingIndex = null;
  store.newItem = { product: '', quantity: 1, price: 0 };
}

function fmt(val) {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(val || 0);
}
</script>

<style scoped>
.preview-total {
  font-weight: bold;
  text-align: right;
  margin: 4px 0 0;
}
</style>
