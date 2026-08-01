<template>
  <v-dialog v-model="store.showDataModal" max-width="560">
    <v-card title="Datos de la cotización">
      <v-card-text>
        <p class="section-label">Mis datos</p>
        <v-text-field v-model="store.myData.companyName" label="Empresa / Nombre" density="compact" />
        <v-text-field v-model="store.myData.address" label="Dirección" density="compact" />
        <v-text-field v-model="store.myData.phone" label="Teléfono" density="compact" />
        <v-text-field v-model="store.myData.email" label="Email" density="compact" />

        <p class="section-label mt-4">Datos del cliente</p>
        <v-text-field v-model="store.dataClient.clientName" label="Nombre del cliente" density="compact" />
        <v-text-field v-model="store.dataClient.clientAddress" label="Dirección" density="compact" />
        <v-text-field v-model="store.dataClient.clientPhone" label="Teléfono" density="compact" />
        <v-text-field v-model="store.dataClient.validity" label="Vigencia" density="compact" />
      </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="primary" @click="store.showDataModal = false">Listo</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { useCotizadorStore } from '@/store/cotizador';
const store = useCotizadorStore();
</script>

<style scoped>
.section-label {
  font-weight: bold;
  color: #0d0b2b;
  margin: 0 0 6px;
}
.mt-4 { margin-top: 16px; }
</style>
