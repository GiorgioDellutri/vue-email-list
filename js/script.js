const {createApp} = Vue; 

createApp({
    data() {
        return{
            mailingList:[]
        }
    },

    methods: {
        randomEmails(){
            for (let i = 0; i < 10; i++){
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {
                    this.mailingList.push(response.data.response);
                })
            }
        }
    },

    created(){
        this.randomEmails()
    }

}).mount('#app')







