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
    <div v-bind:class="{ clicker: true, hidden: hidden() }" v-on:click="randomize">{{ token }}</div>
  `,
  props: ['tokenBag'],
  data: function () {
    return {
      token: undefined,
      bag: this.tokenBag
    }
  },
  methods: {
    randomize: function () {
      if (this.hidden()) {
        var index = Math.floor(Math.random() * this.bag.length);
        this.token = this.bag[index];
      } else {
        this.token = undefined;
      }
      this.$emit('randomize');
    },
    hidden: function () {
      return this.token == undefined;
    }
  }
})
var app = new Vue({
  el: '#app',
})
