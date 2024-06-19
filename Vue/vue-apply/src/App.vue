<script>
export default {
  name: "app",
  data() {
    return {
      check: [],
      agree: "no",
      name2: "",
      tier: 0,
      contacts: [
        { no: 1011, name: "RM", tel: "010-3456-8299" },
        { no: 1012, name: "정국", tel: "010-3456-8298" },
        { no: 1013, name: "제이홉", tel: "010-3456-8297" },
        { no: 1014, name: "슈가", tel: "010-3456-8296" },
      ],
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
    <br>

    <div>
      <table id="list">
      <thead>
        <tr>
          <th>번호</th>
          <th>이름</th>
          <th>전화번호</th>
        </tr>
      </thead>
      <tbody id="contacts">
        <tr v-for="contact in contacts" :key="contact.no">
          <!-- :key="contact.no는 v-bind:key의 생략형태이며,
             key속성값은 고유값으로 작성되며 외부에서는 보이지 않는다. -->
          <td>{{contact.no}}</td>
          <td>{{contact.name}}</td>
          <td>{{contact.tel}}</td>
        </tr>
        <!-- 반복이 되려는 템플릿 1셋트를 적어놓고, for...in를 이용하여
           데이터의 반복을 구현한다. 각 개별데이터를 입력해야하는 구간에는
           객체의 점표기법, 대괄호표기법을 활용하여 머스태시로 입력해두면
           초기렌더링때 구현이 된다. -->
      </tbody>
    </table>
    </div>
  </div>
</template>

<style scoped>
#list {
      width: 600px;
      border: 1px solid black;
      border-collapse: collapse;
    }

    #list td,
    #list th {
      border: 1px solid black;
      text-align: center;
    }

    #list>thead>tr {
      color: yellow;
      background-color: purple;
    }
</style>
