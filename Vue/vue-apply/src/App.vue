<script>
export default {
  name: "app",
  data() {
    return {
      check: [],
      agree: "no",
      name2: "",
      tier: 0
    };
  },

  methods: {
    changeName(e) {
      this.name2 = e.target.value;
    },
  },
}


</script>

<template>
  <div id="app">
    <div>
      <input type="checkbox" id="checkA" value="A" v-model="check">
      <label for="checkA">here is A</label><br>
      <input type="checkbox" id="checkB" value="B" v-model="check">
      <label for="checkB">here is B</label><br>
      <input type="checkbox" id="checkC" value="C" v-model="check">
      <label for="checkC">here is C</label><br>
      <input type="checkbox" id="checkD" value="D" v-model="check">
      <label for="checkD">here is D</label><br>
      <input type="checkbox" id="checkE" value="E" v-model="check">
      <label for="checkE">here is E</label><br>
      <input type="checkbox" id="checkF" value="F" v-model="check">
      <label for="checkF">here is F</label><br>
      <input type="checkbox" id="checkG" value="G" v-model="check">
      <label for="checkG">here is G</label><br>
    </div>
    <br>

    <div>
      위의 내용에 동의하십니까?
      <input type="checkbox" v-model="agree" true-value="yes" false-value="no">
    </div>
    <br>
    
    <div>
      <input id="a2" type="text" :value="name2" @input="changeName">
    </div>
    <br>

    <div>
      티어 : <input type="text" v-model="tier">
    </div>
    <hr>

    <div>
      선택한 체크박스 ID : {{check.join(',')}} <br>
      동의 사항 확인 : {{agree}} <br>
      작성 내용 확인 : {{name2}} <br>
      회원님의 등급 :
      <span v-if="tier >= 20">Gold</span>
      <span v-else-if="tier >= 15">Silver</span>
      <span v-else-if="tier >= 10">Bronze</span>
      <span v-else>iron</span> 
    </div>

  </div>
</template>

<style scoped>

</style>
