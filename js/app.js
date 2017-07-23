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
    <div class="picker" v-on:click="randomize">
      <div v-bind:class="{ main: true, hidden: hidden() }">{{ token }}</div>
      <ul class="last">
        <li v-for="result in lastResults">{{ result }}</li>
      </ul>
    </div>
  `,
  props: ['tokenBag'],
  data: function () {
    return {
      token: " ",
      lastResults: [],
      bag: this.tokenBag
    }
  },
  methods: {
    randomize: function () {
      if (this.hidden()) {
        var index = Math.floor(Math.random() * this.bag.length);
        this.token = this.bag[index];
      } else {
        if (this.lastResults.length >= 3) {
          this.lastResults.shift();
        }
        this.lastResults.push(this.token);
        this.token = " ";
      }
      this.$emit('randomize');
    },
    hidden: function () {
      return this.token == " ";
    }
  }
})
var app = new Vue({
  el: '#app',
})
