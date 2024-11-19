<template>
    <div>
      <h1>Progetti</h1>
      <ul>
        <li v-for="project in projects" :key="project.id">
          <router-link :to="{ name: 'project-detail', params: { id: project.id }}">
            {{ project.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        projects: [],
      };
    },
    created() {
      axios.get('http://localhost:8000/api/projects')
        .then(response => {
          this.projects = response.data;
        })
        .catch(error => {
          console.error(error);
        });
    },
  };
  </script>
  