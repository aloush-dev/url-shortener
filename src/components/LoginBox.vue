<script></script>

<template>
  <form>
    <label>
      email
      <input />
    </label>

    <label
      >password
      <input />
    </label>

    <button>login</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

label {
  display: flex;
  flex-direction: column;
  text-align: center;
}

input {
  padding: 1rem;
}

button {
  padding: 1rem;
  margin: 1rem;
  background-color: #00a1e4;
  border: none;
  color: white;
  font-weight: 900;
}
</style>
