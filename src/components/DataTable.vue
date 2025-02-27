<template>
  <div>
    <q-input
      v-model="searchQuery"
      label="Search by name"
      dense
      outlined
      class="q-mb-md"
    />
    <q-table
      :data="filteredData"
      :columns="columns"
      :loading="loading"
      row-key="id"
      @row-click="onRowClick"
    />
  </div>
</template>

<script>
export default {
  props: {
    filteredData: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      searchQuery: "",
      columns: [
        { name: "id", label: "ID", field: "id", align: "left" },
        { name: "name", label: "Name", field: "name", align: "left" },
        { name: "email", label: "Email", field: "email", align: "left" },
        { name: "phone", label: "Phone", field: "phone", align: "left" },
      ],
    };
  },
  methods: {
    onRowClick(evt, row) {
      this.$emit("row-click", row);
    },
  },
  watch: {
    searchQuery(newQuery) {
      this.$emit("update:search-query", newQuery);
    },
  },
  mounted() {
    console.log("Table Data:", this.filteredData);
  },
};
</script>
