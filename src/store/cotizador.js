import { defineStore } from 'pinia';

export const useCotizadorStore = defineStore('cotizador', {
  state: () => ({
    items: [],
    newItem: { product: '', quantity: 1, price: 0 },
    myData: {
      companyName: 'Tecno Leal',
      address: 'Cosamaloapan, Veracruz',
      phone: '283 108 7811',
      email: 'contacto@tecnoleal.com',
    },
    dataClient: {
      clientName: 'Cliente Residencial / Comercial',
      clientAddress: 'Cosamaloapan, Veracruz',
      clientPhone: '283 108 7811',
      validity: '15 días naturales',
    },
    ivaRate: 0.16,
    showModal: false,
    showDataModal: false,
  }),
  getters: {
    subtotal: (state) => state.items.reduce((acc, item) => acc + item.total, 0),
    iva: (state) => state.items.reduce((acc, item) => acc + item.total, 0) * state.ivaRate,
    total(state) { return this.subtotal + this.iva; },
  },
  actions: {
    addItem() {
      const item = { ...this.newItem };
      item.total = item.quantity * item.price;
      if (this.editingIndex !== null) {
        this.items[this.editingIndex] = item;
        this.editingIndex = null;
      } else {
        this.items.push(item);
      }
      this.newItem = { product: '', quantity: 1, price: 0 };
      this.showModal = false;
    },
    editItem(index) {
      this.editingIndex = index;
      this.newItem = { ...this.items[index] };
      this.showModal = true;
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
  },
});
