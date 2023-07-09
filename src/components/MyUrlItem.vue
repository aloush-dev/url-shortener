<script setup>
import axios from "axios";
import { toRefs } from "vue";

const props = defineProps({
  urlItem: Object,
});

const { urlItem } = toRefs(props);

const handleActiveChange = () => {
  axios.patch("", { isActive: !urlItem.value.isActive });
};
</script>

<template>
  <li>
    <div id="checkbox">
      <input
        @change="handleActiveChange"
        v-model="urlItem.isActive"
        type="checkbox"
      />
    </div>
    <h3>Alias : {{ urlItem.alias || "N/A" }}</h3>
    <div>Original Url : {{ urlItem.originalUrl }}</div>
    <div>Times Clicked :{{ urlItem.clicked }}</div>
  </li>
</template>



<style scoped>
li {
  position: relative;
  list-style: none;
  background-color: white;
  color: black;
  margin: 1rem;
  padding: 1rem;
  width: 50%;
}

#checkbox {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.5rem;
}

input[type="checkbox"] {
  appearance: none;
  position: relative;
  height: 35px;
  width: 60px;
  background-color: white;
  border-radius: 5rem;
  transition: background-color 0.2s;
  box-shadow: 0 0 15px #0000001e;
}

input[type="checkbox"]::after {
  position: absolute;
  content: "";
  top: 50%;
  left: 30%;
  transform: translate(-50%, -50%);
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background-color: rgb(47, 47, 68);
  transition: left 0.2s;
}

input[type="checkbox"]:checked {
  background-color: rgb(98, 249, 173);
}

input[type="checkbox"]:checked::after {
  left: 70%;
}
</style>
