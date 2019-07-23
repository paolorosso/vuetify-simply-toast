<template>
  <div id="app">
    <v-app id="inspire">
      <!-- Plugins -->
      <toast></toast>

      <v-btn color="success" @click="$toast.success('Success')">Success</v-btn>
      <v-btn color="error" @click="$toast.error('Error')">Error</v-btn>
      <v-btn color="warning" @click="$toast.warning('Warning')">Warning</v-btn>
      <v-btn color="info" @click="$toast.info('Info')">Info</v-btn>
    </v-app>
  </div>
</template>

<script>
export default {
  
};
</script>


