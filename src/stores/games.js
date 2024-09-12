import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export const useGamesStore = defineStore('games', () => {
  const games = ref([])

  async function fetchGames() {
    try {
      const url = '/api/juegos.json'
      const { data } = await axios.get(url)
      games.value = data
    } catch (error) {
      console.error(error)
    }
  }

  function sumarStock(codigo) {
    games.value.map(game => {
      if(game.codigo === codigo) {
        game.stock++
      }
    })
  }

  function restarStock(codigo) {
    games.value.map(game => {
      if(game.codigo === codigo && game.stock > 0) {
        game.stock--
      }
    })
  }

  return { games, fetchGames, sumarStock, restarStock }
})
