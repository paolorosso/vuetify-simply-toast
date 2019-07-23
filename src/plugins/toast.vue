<template>
  <v-snackbar :timeout="timeOut" top v-model="snack" :color="color">{{ message }}</v-snackbar>
</template>

<script>
import { EventBus } from "./toastEventBus";

export default {
  data: () => ({
    snack: false,
    message: "",
    timeOut: 4000,
    color: ""
  }),

  methods: {
    info(messaggio) {
      this.message = messaggio;
      this.color = "blue accent-3";
    },
    warning(messaggio) {
      this.message = messaggio;
      this.color = "amber darken-2";
    },
    success(messaggio) {
      this.message = messaggio;
      this.color = "green darken-1";
    },
    error(messaggio) {
      this.message = messaggio;
      this.color = "deep-orange darken-3";
    },
    handleToast(tipo, msg) {
      this.snack = !!msg;

      if (!this.snack) return;

      if (tipo == "info") this.info(msg);
      else if (tipo == "warning") this.warning(msg);
      else if (tipo == "success") this.success(msg);
      else if (tipo == "error") this.error(msg);
    }
  },

  beforeMount() {
    EventBus.$on("ToastMessage", this.handleToast);
  },

  beforeDestroy() {
    EventBus.$off("ToastMessage", this.handleToast);
  }
};
</script>
