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
    <div>Original Link : {{ urlItem.originalUrl }}</div>
    <div>
      Quick Link :
      <a
        :href="'https://url-shortner-c0kv.onrender.com/' + urlItem.id"
        target="_blank"
        >https://url-shortner-c0kv.onrender.com/{{ urlItem.id }}</a
      >
    </div>

    <div id="clicks">
      Clicks
      <div id="clicks-count">
        {{ urlItem.clicked }}
      </div>
    </div>
  </li>
</template>

<style scoped>
li {
  position: relative;
  list-style: none;
  background-color: white;
  color: black;
  padding: 1.5rem;
  padding-right: 4rem;
  margin: 1rem;
  min-width: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
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

h3 {
  font-weight: 600;
  font-size: x-large;
}

#clicks {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: small;
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 0.5rem;
}

#clicks-count {
  background-color: #62f9ad;
  border-radius: 50%;
  height: 2.5rem;
  width: 2.5rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
}
</style>
