const { createApp } = Vue;

createApp ( {
    data() {
        
        return {
            randomMail : null,
            mailList: [],
        }

        
    },

    methods: {
        generateRandomMail(){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) => {
                console.log(response.data);
                this.randomMail = response.data.response;
                this.mailList.push(this.randomMail);
            })
        }
        
    },

    created(){
        for (let i =0; i < 10; i++) {
            this.generateRandomMail();
        }
            
    },

}).mount('#app');


