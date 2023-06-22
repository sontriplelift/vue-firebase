const app = Vue.createApp({
  // data, functions
  // template: '<h1>This is a template</h1>'
  data() {
    return {
      showBooks: false,
      books: [
        {
          title: 'The final Empire',
          author: 'Brandon Sanderson',
        },
        {
          title: 'The final Empire II',
          author: 'Brandon Sanderson',
        },
        {
          title: 'The final Empire III',
          author: 'Brandon Sanderson',
        }
      ],
      x: 0,
      y: 0,
      url1: 'https://github.com/',
      url2: 'https://www.w3schools.com/',
    }
  },
  methods: {
    handleEvent(e, data) {
      console.log(e)
      console.log(data)
    },
    handleMousemove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    }
  }
})

app.mount('#app');