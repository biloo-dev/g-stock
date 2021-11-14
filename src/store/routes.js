 
const ipc = require('electron').ipcRenderer
 
export default {
  get:async (route,arg=null) =>{
    return await ipc.invoke(route,arg)
  },
  save:async  (route,arg=null) => {
    return await ipc.invoke(route,arg)
  },
  delete:async  (route,arg=null) => {
    return await ipc.invoke(route,arg)
  },
  edit:async  (route,arg=null) => {
    return await ipc.invoke(route,arg)
  }
}
 
