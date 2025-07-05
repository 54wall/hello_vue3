<template>
  <div class="person">
    <h2>姓名!!!:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button>
  </div>
</template>

<script>
export default {
  name: 'Person',
  beforeCreate() {
    console.log('beforeCreate函数被调用了', this)
    // Options API beforeCreate hook
    // 可以在这里进行一些初始化操作
  },
  setup() {
    console.log('setup函数被调用了', this)
    // Composition API setup function
    // 可以在这里定义响应式数据和方法
    let name = '张三'
    let age = 18
    let tel = 15555551234

    function changeName() {
      console.log('changeName函数被调用了')
      name = 'zhang-san' // 这里的name是一个普通变量，不是响应式的
      console.log('name:', name)
    }
    function changeAge() {
      console.log('changeAge函数被调用了')
      age += 1
      console.log('age:', age)
    }
    function showTel() {
      console.log('showTel函数被调用了')
      alert(tel)
    }
    // return {
    //   name,
    //   age,
    //   tel,
    //   changeName,
    //   changeAge,
    //   showTel,
    // }

    // return  function(){
    //   return "哈哈"
    // }
    return () => '哈哈'
  },
}
</script>

<style>
.person {
  background-color: rgb(149, 79, 44);
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 30px;
}
button {
  margin: 0 5px;
}
</style>
