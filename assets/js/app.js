const { createApp } = Vue

createApp({
    data() {
        return {
            title: 'To Do List',
            newToDo: '',
            items: [
                {
                    text: 'portare il cane dal veterinario',
                    done: false
                },
                {
                    text: 'comprare gli ingredienti per la torta',
                    done: false
                },
                {
                    text: '3o minuti di yoga',
                    done: false
                },
            ]
        }
    },

    methods: {
        addToDo() {
            const newItem = {
                text: this.newToDo,
                done: false
            }
            this.items.push(newItem);
            this.newToDo = ''
        },

        toDoTrue() {
            this.node = true,
            document.getElementById('listItem').addEventListener('click', function () {
                document.getElementById('listItem').classList.add('crossed')
            })
        },



    }

}).mount('#app')