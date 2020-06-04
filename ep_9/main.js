Vue.component('message', {
    props:['body','title'],
    data() {
        return {
            isVisible: true
        }
    },
    template: `
            <article class="message" v-show="isVisible">
                <div class="message-header">
                     {{title}}

                     <button class="close" @click="isVisible = false">X</button>
                </div>

                 <div class="message-body">
                     {{body}}
                </div>
            </article>
    `,
    methods: {
        hideModel() {
            this.isVisible = false 
        }
    }
});

new Vue({
    el: '#root'
});