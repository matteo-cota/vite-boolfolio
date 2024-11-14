<script>
import axios from 'axios';
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const projects = ref([]);

    onMounted(() => {
      axios.get('http://localhost:8000/api/projects')
        .then(response => {
          projects.value = response.data;
          console.log(projects.value); 
        })
        .catch(error => console.error(error));
    });

    return { projects };
  }
};
</script>


<template>
  <div>
    <h1>Progetti</h1>
    <div v-for="project in projects" :key="project.id">
      <h2>{{ project.name }}</h2>
      <p>{{ project.description }}</p>
    </div>
  </div>
</template>

