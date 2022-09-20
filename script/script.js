console.log('JS OK!');

const app = new Vue({
    el: '#app',
    data: {
        eMail: [],
        limit: 10,

    },
    methods: {
        generateMail() {
            console.log(this.eMail);

            this.eMail = [];
            for (let i = 1; i <= this.limit; i++) {
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')

                    .then((response) => {
                        if (response.status === 200) {
                            const randomMail = response.data.response;
                            this.eMail.push(randomMail);
                        }
                    });
            }
            console.log(this.eMail);


        },
    },
});
