<script>
import { mapStores } from "pinia";
import { useGamesStore } from "@/stores/games.js"

export default {
  name: 'ShowGames',
  computed: {
    ...mapStores(useGamesStore)
  },
  created() {
    this.gamesStore.fetchGames()
  },
  methods: {
    sumarStock(codigo) {
      this.gamesStore.sumarStock(codigo)
    },
    restarStock(codigo) {
      this.gamesStore.restarStock(codigo)
    }
  }
}
</script>

<template>
  <h2>Lista de juegos</h2>
  <table>
    <thead>
      <tr>
        <th>Código</th>
        <th>Nombre</th>
        <th>Stock</th>
        <th>Precio</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="game in gamesStore.games" :key="game.codigo">
        <td>{{ game.codigo }}</td>
        <td>{{ game.nombre }}</td>
        <td>{{ game.stock }}</td>
        <td>${{ game.precio }}</td>
        <td>
          <button @click="sumarStock(game.codigo)">+</button>
          <button @click="restarStock(game.codigo)">-</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
h2 {
  text-align: center;
  margin-block: 2.5rem 1.5rem;
}

table {
  width: 80%;
  text-align: center;
  border: 1px solid lightgray;
  margin-inline: auto;
}

th {
  font-weight: bold;
  font-size: 1.1rem;
}

th, td {
  border: 1px solid lightgray;
  padding: .4rem;
}

button:first-of-type {
  margin-right: .5rem;
}
</style>