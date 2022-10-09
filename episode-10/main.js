Vue.component('modal', {
    template: `
    <div class="modal">
  <div class="modal-background">Modal Example</div>
  <div class="modal-content">
    <!-- Any other Bulma elements you want -->
    <slot></slot>
  </div>
  <button class="modal-close is-large" @click="$emit('close')">X</button>
</div>
    `
});

new Vue({
    el: '#root',
    data: function() {
        return {
            isVisible: false
        }
    },
    methods: {
        showModal() {
            this.isVisible = true
        }
    }
});