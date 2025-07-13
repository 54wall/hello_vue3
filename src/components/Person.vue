<template>
  <div class="person">
    姓：<input type="text" value="firstName" /> <br />
    <!-- 非双向 -->
     非双向<br />
    姓：<input type="text" v-bind:value="firstName" /> <br />
    姓：<input type="text" :value="firstName" /> <br />
    <br />
    双向
    <br>
    <!-- 双向 -->
    姓：<input type="text" v-model="firstName" /> <br />
    名：<input type="text" v-model="lastName" /> <br />
    <button @click="changeFullName">修改全名</button> <br />
    fullName全名：<span>{{ fullName }}</span> <br />
    fullName全名：<span>{{ fullName }}</span> <br />
    fullName全名：<span>{{ fullName }}</span> <br />
    <br />
    fullName2()全名：<span>{{ fullName2() }}</span> <br />
    fullName2()全名：<span>{{ fullName2() }}</span> <br />
    fullName2()全名：<span>{{ fullName2() }}</span> <br />
    <br />
    <!--  -->
    fullName3 全名：<span>{{ fullName3 }}</span> <br />

    <button @click="changeFullName3">修改全名</button> <br />
  </div>
</template>

<script setup name="Person">
// import { get } from 'http'
import { ref, computed } from 'vue'
let firstName = ref('zhang')
let lastName = ref('san')
//fullname是一个计算属性，且是只读的
// let fullName = computed(() => {
//   console.log('let fullName 被调用')
//   return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + lastName.value
// })
//定义的fullname是一个计算属性，可读可写
let fullName = computed({
  get() {
    return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + lastName.value
  },
  set(val) {
    const[str1,str2] = val.split('-')
    firstName.value = str1
    lastName.value = str2
  },
})

function fullName2() {
  console.log('function fullName2()被调用')
  return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + lastName.value
}

function changeFullName() {
  console.log('changeFullName()被调用')
  fullName.value = 'li-si'
}

function changeFullName3() {
  console.log('changeFullName3()被调用')
  fullName.value = 'li-si'
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
