<template>
  <div class="person">
    <h2>汽车品牌:{{ car.brand }}汽车价格:{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车价格</button>
    <br />
    <h2>游戏列表:</h2>
    <ul>
      <li v-for="game in games" :key="game.id">{{ game.name }}</li>
    </ul>
    <button @click="changeFirstGame">修改第一个游戏名称</button>
    <hr />
    <h2>嵌套对象的值:{{ obj.a.b.c }}</h2>
    <button @click="changeObj">修改嵌套对象的值</button>

    <!-- <h2>姓名!!!:{{ name }}</h2>
    <h2>年龄:{{ age }}</h2>
    <h2>地址:{{ address }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">查看联系方式</button> -->
  </div>
</template>

<!-- 
//不使用vite-plugin-vue-setup-extend插件
<script>
import { Script } from 'vm'
export default {
  name: 'Person',
  beforeCreate() {
    console.log('beforeCreate函数被调用了', this)
    // Options API beforeCreate hook
    // 可以在这里进行一些初始化操作
  },
}
</script> -->

<script setup name="Person">
import { reactive } from 'vue'
let car = reactive({ brand: '奔驰', price: 100 })
let games = reactive([
  { id: 'geme1', name: '鬼泣' },
  { id: 'geme2', name: '鬼武者' },
  { id: 'geme3', name: '生化危机' },
])
let obj = reactive({ a: { b: { c: 666 } } })

function changePrice() {
  console.log('changePrice函数被调用了')
  car.price += 10
  console.log('carprice:', car.price)
}
function changeFirstGame() {
  console.log('changeFirstGame函数被调用了')
  games[0].name = '逆转裁判'
  console.log('games:', games)
}
function changeObj() {
  console.log('changeObj函数被调用了')
  obj.a.b.c = 999
  console.log('obj:', obj)
}
</script>

<!-- 使用vite-plugin-vue-setup-extend插件 -->
<!-- <script setup name="Person">
import { ref } from 'vue'
// let car = ref{brand:'奔驰',price:100}
    import { ref } from 'vue'
    console.log('setup函数被调用了', this)
    // Composition API setup function
    // 可以在这里定义响应式数据和方法
    let name = ref('张三')
    let age = ref(18)
    let tel = 15555551234
    let address = '北京市海淀区'
    console.log('name:', name)
    console.log('age:', age)
    console.log('tel:', tel)
    console.log('address:', address)

    function changeName() {
      console.log('changeName函数被调用了')
      name.value = 'zhang-san' // 这里的name是一个普通变量，不是响应式的
      console.log('name:', name)
    }
    function changeAge() {
      console.log('changeAge函数被调用了')
      age.value += 1
      console.log('age:', age)
    }
    function showTel() {
      console.log('showTel函数被调用了')
      alert(tel)
    }
</script> -->

<style>
.person {
  background-color: rgb(149, 79, 44);
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 30px;
}
li {
  /* list-style: none; */
  font-size: 20px;
}
button {
  margin: 0 5px;
}
</style>
