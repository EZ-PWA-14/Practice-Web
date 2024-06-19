<script>
export default {
  name: "App",
  data() {
    return {
      hobby: [],
      // 값이 여러개로 들어오는 경우 배열로 설정
      category: "",
      // 값이 한개로 들어오는 경우 문자열로 설정
    };
  },
}
</script>

<template>
  <div id="app">
    <div>
      <h2>취미생활</h2>
      <input type="checkbox" id="hobbyA" value="A" v-model="hobby">
      <label for="hobbyA">운동</label><br>
      <input type="checkbox" id="hobbyB" value="B" v-model="hobby">
      <label for="hobbyB">독서</label><br>
      <input type="checkbox" id="hobbyC" value="C" v-model="hobby">
      <label for="hobbyB">음악</label><br>
      <input type="checkbox" id="hobbyD" value="D" v-model="hobby">
      <label for="hobbyB">댄스</label><br>
      <input type="checkbox" id="hobbyE" value="E" v-model="hobby">
      <label for="hobbyB">역사</label><br>
    </div>
    <div>
      <h2>상품 분류 선택</h2>
      <select v-model="category">
        <option value="">----상품 분류를 선택하세요----</option>
        <option value="C01">레저</option>
        <option value="C02">가전</option>
        <option value="C03">음식</option>
        <option value="C04">도서</option>
        <option value="C05">주방</option>
      </select>
    </div>
    <hr>
    <div>
      선택한 취미 : {{hobby.join(',')}} <br>
      선택한 상품 분류 : {{category}}
    </div>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
