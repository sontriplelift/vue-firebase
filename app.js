const app = Vue.createApp({
  // data, functions
  // template: '<h1>This is a template</h1>'
  data() {
    return {
      showBooks: false,
      title: 'The final Empire',
      author: 'Brandon Sanderson',
      age: '45',
    }
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    
  }
})

app.mount('#app');