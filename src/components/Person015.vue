<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ person.age }},{{nl}}</h2>
    <h2>联系方式：{{ person.tel }}</h2>
    <h2>地址：{{ person.address }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script setup name="Person">
import { reactive, toRefs, toRef } from 'vue'
let person = reactive({
  name: '张三',
  age: 18,
  tel: 15555551234,
  address: '北京市海淀区',
})

let { name, age, tel, address } = toRefs(person)
let nl = toRef(person, 'age')
console.log('nl.value:', nl.value)

console.log('person:', person)
console.log('name:', name)
console.log('age:', age)

function changeName() {
  console.log('changeName函数被调用了')
  name.value += '~'
  console.log('person.name:', person.name)
  console.log('name:', name)
}
function changeAge() {
  console.log('changeAge函数被调用了')
  age.value += 1
  console.log('age:', age)
}
</script>

<style>
.person {
  background-color: rgb(119, 157, 206);
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
