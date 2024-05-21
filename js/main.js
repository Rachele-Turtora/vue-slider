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
        arrowUp(){
            if (this.indexCount !== 0){
                this.indexCount--;
            } else {
                this.indexCount = 4;
            }
        },

        arrowDown(){
            if (this.indexCount !== 4){
                this.indexCount++;
            } else {
                this.indexCount = 0;
            }
        },

        selectThumb(index){
            this.indexCount = index;
        },

        ciao(){
            console.log("ciao");
        }
    },

    mounted(){
        setInterval(() => {
            if (this.indexCount !== 4){
                this.indexCount++;
            } else {
                this.indexCount = 0
            }
        }, 3000);
    }

  }).mount('#app')