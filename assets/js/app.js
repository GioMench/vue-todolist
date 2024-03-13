const { createApp } = Vue

createApp({
    data() {
        return {
            title: 'To Do List',
            checked: true,

            items: [
                {
                    text: '',
                    

                }]
        }
    }
}).mount('#app')