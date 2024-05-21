const { createApp } = Vue

  createApp({
    data() {
      return {
        images: [
            "img/01.webp",
            "img/02.webp",
            "img/03.webp",
            "img/04.webp",
            "img/05.webp"
        ],

        indexCount: 0
      }
    },

    methods: {
        arrowUp(indexCount){
            if (indexCount < 0){
                this.indexCount = 4
            } else {
                this.indexCount--
            }
        },

        arrowDown(indexCount){
            if (indexCount > 4){
                this.indexCount = 0
            } else {
                this.indexCount++
            }
        }
    }
  }).mount('#app')