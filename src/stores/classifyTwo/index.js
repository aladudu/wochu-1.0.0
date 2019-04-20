import {getclassifyTwo} from "@/api/api.js"
export default {
  state: {
      list: []
  },
  actions: {
      async getActionsList() {
          let data = await getclassifyTwo()
           console.log(data.data)
      }
  },
  namespaced: true
}


