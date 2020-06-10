var names = 'Cristi';

new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun',
        job: "Programmer",
        website: 'http://www.google.com',
        websiteTag: '<a href="http://www.google.com">Google</a>'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ' ' + names;
        }
    }
})