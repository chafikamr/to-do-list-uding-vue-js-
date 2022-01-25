var app = new Vue({
  el : '#app',
  data : {
    tasks : [],
    taskText : ''
  },
  methods : {
    addTask : function(){
      this.tasks.push({task : this.taskText , done : false})
      this.taskText = ''
    },
    deleteTask : function(index){
      this.tasks.splice(index,1)
    },
    clear : function(){
      this.tasks = []
    }
  }
})