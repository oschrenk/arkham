Vue.component('number-picker', {
  template: `
    <div class="counter">
       <div class="left half" v-on:click="decrement"><span>-</span></div>
       <div class="right half" v-on:click="increment"><span>+</span></div>
       <div class="overlay">{{ counter }}</div>
    </div>
  `,
  data: function () {
    return {
      counter: 0
    }
  },
  methods: {
    increment: function () {
      this.counter += 1
      this.$emit('increment')
    },
    decrement: function () {
      this.counter -= 1
      this.$emit('decrement')
    }
  }
})
Vue.component('token-picker', {
  template: `
    <div class="clicker" v-on:click="randomize">{{ token }}</div>
  `,
  props: ['tokenBag'],
  data: function () {
    return {
      token: "",
      bag: this.tokenBag
    }
  },
  methods: {
    randomize: function () {
      var index = Math.floor(Math.random() * this.bag.length);
      this.token = this.bag[index];
      this.$emit('randomize');
    }
  }
})
var app = new Vue({
  el: '#app',
})
