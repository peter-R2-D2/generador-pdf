<template>
  <div class="body-pdf" id="body-pdf">
    <header class="body-header">
      <img src="@/assets/TL-logo-black.png" alt="Logo" width="180" />
      <div class="text-end">
        <h2 class="m-0">COTIZACIÓN</h2>
        <p class="m-0">Folio: COT-{{ folio }}</p>
        <p class="m-0">Fecha: {{ today }}</p>
      </div>
    </header>

    <div class="body-main">
      <div>
        <p class="body-main__title">Datos del emisor</p>
        <p class="m-0">{{ store.myData.companyName }}</p>
        <p class="m-0">{{ store.myData.address }}</p>
        <p class="m-0">{{ store.myData.phone }}</p>
        <p class="m-0">{{ store.myData.email }}</p>
      </div>
      <div>
        <p class="body-main__title">Cotización para:</p>
        <p class="m-0">{{ store.dataClient.clientName }}</p>
        <p class="m-0">{{ store.dataClient.clientAddress }}</p>
        <p class="m-0">{{ store.dataClient.clientPhone }}</p>
        <p class="m-0">Vigencia: {{ store.dataClient.validity }} a partir de la fecha de cotización</p>
      </div>
    </div>

    <table class="table-items">
      <thead>
        <tr class="table-row table-header">
          <th class="text-center">CANT.</th>
          <th class="text-start">DESCRIPCIÓN</th>
          <th class="text-end">P. UNITARIO</th>
          <th class="text-end">IMPORTE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="store.items.length === 0">
          <td colspan="4" class="text-center empty-row">Sin productos agregados</td>
        </tr>
        <tr v-for="(item, i) in store.items" :key="i" class="table-row table-body-row">
          <td class="text-center">{{ item.quantity }}</td>
          <td class="text-start">{{ item.product }}</td>
          <td class="text-end">{{ fmt(item.price) }}</td>
          <td class="text-end">{{ fmt(item.total) }}</td>
        </tr>
      </tbody>
    </table>

    <div class="body-totals">
      <div class="totals-box">
        <div class="totals-row"><span>Subtotal</span><span>{{ fmt(store.subtotal) }}</span></div>
        <div class="totals-row"><span>IVA (16%)</span><span>{{ fmt(store.iva) }}</span></div>
        <div class="totals-row totals-total"><span>TOTAL</span><span>{{ fmt(store.total) }}</span></div>
      </div>
    </div>

    <div class="info-sections">

      <!-- 1. Opciones de pago -->
      <div class="info-grid">
        <div class="card">
          <div class="card-header card-header--blue">
            <span>💳 OPCIONES DE PAGO</span>
          </div>
          <ul class="card-body">
            <li>Pago de contado al 100% al momento de autorizar la cotización.</li>
            <li>50% de anticipo al autorizar y 50% restante al concluir la instalación y pruebas de funcionamiento.</li>
            <li>Los precios son netos en Moneda Nacional (MXN).</li>
          </ul>
        </div>

        <!-- 2. Requerimientos de instalación previos -->
        <div class="card">
          <div class="card-header card-header--orange">
            <span>⚙ REQUERIMIENTOS DE INSTALACIÓN PREVIOS</span>
          </div>
          <ul class="card-body">
            <li>Contar con módem / servicio de Internet activo en el sitio si se requiere monitoreo remoto en celular.</li>
            <li>Contar con un punto de energía eléctrica cercano a la ubicación del DVR.</li>
            <li>Monitor o pantalla con entrada HDMI/VGA si se desea visualización fija.</li>
          </ul>
        </div>
      </div>

      <!-- 3. Tu contratación incluye -->
      <div class="card">
        <div class="card-header card-header--green">
          <span>✓ TU CONTRATACIÓN INCLUYE</span>
        </div>
        <ul class="card-body card-body--grid">
          <li><strong>Visión Nocturna y Alta Definición:</strong> Monitoreo continuo 24/7 con calidad Full HD (1080p).</li>
          <li><strong>Monitoreo en Tu Celular:</strong> Visualiza tus cámaras en vivo desde cualquier lugar sin pagos mensuales de suscripción.</li>
          <li><strong>Detección Inteligente WizSense:</strong> Alertas y grabaciones optimizadas para reducir falsas alarmas.</li>
          <li><strong>Garantía:</strong> 1 año de garantía con fabricante en equipos y 3 meses de garantía en la instalación.</li>
        </ul>
      </div>

    </div>

    <div class="pdf-footer">
      <span>Tecno Leal • Soluciones de Seguridad • 283 108 7811</span>
      <span class="legal">Términos y condiciones: La garantía de instalación aplica únicamente cuando el daño no sea causado por mal uso, intervención de terceros, desastres naturales o condiciones ajenas a Tecno Leal.</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useCotizadorStore } from '@/store/cotizador';

const store = useCotizadorStore();
const today = new Date().toLocaleDateString('es-MX');
const folio = computed(() => `${Date.now().toString().slice(-6)}`);

function fmt(val) {
  return new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(val);
}
</script>

<style>
.body-pdf {
  font-family: Arial, sans-serif;
  font-size: 12px;
  color: #1a1a2e;
  line-height: 1.4;
}

.body-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0d0b2b;
  color: white;
  padding: 12px 16px;
  border-radius: 6px 6px 0 0;
}

.body-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #f0f0f5;
  padding: 10px 16px;
  margin-bottom: 10px;
  gap: 16px;
}

.body-main__title {
  font-weight: bold;
  margin: 0 0 3px 0;
  color: #0d0b2b;
}

.table-items {
  width: 100%;
  border-collapse: collapse;
}

.table-row {
  display: grid;
  grid-template-columns: 8% 57% 17% 18%;
}

.table-header {
  background-color: #0d0b2b;
  color: white;
}

.table-header th,
.table-body-row td {
  padding: 6px 10px;
  box-sizing: border-box;
}

.table-body-row {
  border-bottom: 1px solid #e0e0e0;
}

.table-body-row:nth-child(even) {
  background-color: #f9f9f9;
}

.empty-row {
  padding: 12px;
  color: #999;
}

.body-totals {
  display: flex;
  justify-content: flex-end;
  padding: 8px 0;
}

.totals-box {
  width: 240px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
}

.totals-row {
  display: flex;
  justify-content: space-between;
  padding: 5px 12px;
  border-bottom: 1px solid #e0e0e0;
}

.totals-total {
  background-color: #0d0b2b;
  color: white;
  font-weight: bold;
  border-bottom: none;
}

/* Cards */
.info-sections {
  margin-top: 8px;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.card {
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0,0,0,0.10);
  margin-bottom: 10px;
  border: 1px solid #e0e0e0;
}

.card-header {
  padding: 7px 12px;
  font-weight: bold;
  font-size: 11px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: white;
}

.card-header--green  { background-color: #1b7a3e; }
.card-header--blue   { background-color: #0d0b2b; }
.card-header--orange { background-color: #b85c00; }

.card-body {
  margin: 0;
  padding: 8px 12px 8px 26px;
  line-height: 1.65;
  background-color: #fff;
}

.card-body--grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 16px;
}

.pdf-footer {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 10px;
  padding-top: 8px;
  border-top: 1px solid #ccc;
  font-size: 11px;
  color: #555;
}

.legal {
  font-size: 9.5px;
  color: #999;
  font-style: italic;
}
</style>
