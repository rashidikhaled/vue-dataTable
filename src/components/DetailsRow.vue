<template lang="">
  <q-card>
    <q-card-section class="bg-primary text-white">
      <div class="text-h6">User Details</div>
    </q-card-section>
    <q-card-section>
      <p><strong>ID:</strong> {{ selectedRow.id }}</p>
      <p><strong>Name:</strong> {{ selectedRow.name }}</p>
      <p><strong>Email:</strong> {{ selectedRow.email }}</p>
      <p><strong>Phone:</strong> {{ selectedRow.phone }}</p>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn flat label="Close" color="primary" v-close-popup />
    </q-card-actions>
  </q-card>
</template>
<script>
export default {
  props: ["selectedRow"],
};
</script>
<style lang=""></style>
