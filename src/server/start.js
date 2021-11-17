 
const PORT = process.env.PORT || 3000

const app = require('./index.js')

app.listen(PORT, () => {
  console.log(`Server started on port ${ PORT }`)
}).on('error', err => {
  console.log('ERROR: ', err)
})

module.exports = app