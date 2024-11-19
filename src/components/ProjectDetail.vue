<template>
    <div>
      <h1>{{ project.name }}</h1>
      <p>{{ project.description }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        project: {},
      };
    },
    created() {
      const id = this.$route.params.id;
      axios.get(`http://localhost:8000/api/projects/${id}`)
        .then(response => {
          this.project = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
  };
  </script>
  