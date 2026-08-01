<template>
  <div class="panel">
    <v-btn variant="outlined" prepend-icon="mdi-account-edit" @click="store.showDataModal = true">
      Editar datos
    </v-btn>
    <v-btn variant="outlined" prepend-icon="mdi-plus" @click="store.showModal = true">
      Agregar item
    </v-btn>
    <v-btn color="primary" prepend-icon="mdi-file-pdf-box" @click="generatePdf('body-pdf')">
      Exportar PDF
    </v-btn>
  </div>
</template>

<script setup>
import { useCotizadorStore } from '@/store/cotizador';
import { generatePdf } from '@/utils/html2pdf';
const store = useCotizadorStore();
</script>

<style scoped>
.panel {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}
</style>
