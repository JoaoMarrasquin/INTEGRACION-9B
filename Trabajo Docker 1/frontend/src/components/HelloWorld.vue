<template>
  <h3>SEGUIMIENTO DE CORREDORES</h3>
   <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Peso</th>
      <th scope="col">Altura</th>
      <th scope="col">Edad</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for ="(corredor, index) in corredors" :key="index">    
          <td>{{corredor.Nombre }}</td>
          <td>{{corredor.Peso}}</td>
          <td>{{corredor.Altura}}</td>
          <td>{{corredor.Edad}}</td>
    </tr>
  </tbody>
</table>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HelloWorld',
  created(){
     axios.get('http://localhost:80/Corredores').then(response => this.corredors = response.data.Corredors)
  },
  data() {
      return {
        corredors: []
      }
    }
}
</script>
