export default {
    methods: {
        showNotification(message, type = "positive") {
            this.$q.notify({
                type,
                message,
                position: "top"
            });
        }
    }
};