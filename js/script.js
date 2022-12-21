const { createApp } = Vue;

createApp ( {
    data() {
        
        return {
            randomMail : null,
        }

        
    },

    methods: {
        generateRandomMail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response.data.response);
                console.log(this)
                this.randomMail = response.data.response;
            })
        }
        
    },

    created(){
        this.generateRandomMail();
    },

}).mount('#app');


