const { createApp } = Vue

createApp({
    data() {
        return {
            title: 'To Do List',
            checked: true,
            newToDo : '',
            items: [
                {
                    text : 'portare il cane dal veterinario',
                    done: false
                },
                {
                    text : 'comprare gli ingredienti per la torta',
                    done: false
                },
                {
                    text : 'comprare gli ingredienti per la torta',
                    done: false
                },
                



            ]
        }
    },
    methods :{
        addToDo(){
            const newItem={
                text: this.newToDo,
               done: false
            }
            this.items.push(newItem);
            this.newToDo = ''
        }
    }
    
}).mount('#app')