const { createApp } = Vue;

createApp({
    data() {
        return {
            todoList: [],
            inputText: "",
        }
    },
    created() {
        axios.get("server.php")
            .then((resp) => {
                this.todoList = resp.data;
            });
    },
    methods: {
        addTodo() {
            const data = {
                text: this.inputText,
                done: false
            };

        },
        doneToggle(index) {
            const data = {
                index: index
            }

        }
    }
}).mount("#app");
