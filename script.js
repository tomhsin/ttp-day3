const app = new Vue({
  el: "#app",
  data: {
    name: 'Tom Hsin',
    company: 'ThinkPower',
    end: '2020/02/15',
    cardClass: 'card',
    imgSrc: "img/2cd43b_30926e419b424948a346f4a74f1f1e32_mv2.png",
    newCompany: "",
    newBg:"",
    cleanBg:"",

    showLife: true,
    showSuper: true,

    items:[
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' },
    ]
    
    },

  methods:{
      onSubmit(){
          this.company = this.newCompany
          this.newCompany =''
      },

      onChange(){
          this.cardClass = this.newBg
      },
      onClean(){
          this.newBg = this.cleanBg
      }
  }
});
