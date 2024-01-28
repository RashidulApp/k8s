import express from 'express'
import  os from 'os'

const app = express()
const PORT = 3000
const ifram = os.networkInterfaces()

app.get('/', (req, res) => {
  const helloMessage = `Hello from the ${os.hostname} => User Home Directory ${os.homedir}`
  console.log(helloMessage)
  res.send('Application Version : 2.0.0  '  + helloMessage)
})

app.listen(PORT, () =>{
    console.log(`Webserver is listening at port ${PORT}`)
})