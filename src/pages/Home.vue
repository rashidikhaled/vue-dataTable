<template>
  <q-layout>
    <q-page-container>
      <q-page class="q-pa-md">
        <data-table
          v-if="!loading"
          :filteredData="filteredData"
          :loading="loading"
          @update:search-query="updateSearchQuery"
          @row-click="showRowDetails"
        />
        <q-spinner v-else-if="loading" size="50px" color="primary" />
        <p v-else>No data available.</p>
        <q-dialog v-model="showDetails">
          <details-row :selectedRow="selectedRow" />
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import DataTable from "../components/DataTable.vue";
import DetailsRow from "../components/DetailsRow.vue";
import notifyMixin from "../mixins/notifyMixin";

export default {
  components: {
    DataTable,
    DetailsRow,
  },
  mixins: [notifyMixin],
  data() {
    return {
      showDetails: false, // Controls the visibility of the details dialog
      selectedRow: null, // Stores the clicked row data
    };
  },
  computed: {
    ...mapState(["loading"]),
    ...mapGetters(["filteredData"]),
    ...mapState(["data"]),
  },
  methods: {
    ...mapActions(["fetchData"]),
    updateSearchQuery(query) {
      this.$store.commit("SET_SEARCH_QUERY", query);
    },
    showRowDetails(row) {
      this.selectedRow = row; // Set the clicked row data
      this.showDetails = true; // Show the details dialog
    },
  },
  async created() {
    await this.fetchData();
    this.showNotification("Data loaded successfully!");
  },
};
</script>
