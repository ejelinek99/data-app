const express = require('express')
const path = require('path')
const fs = require('fs')
const {execSync} = require('node:child_process')

const app = express()
const port = 3001

const jsonFilePath = path.join(__dirname, 'ProgrammingChallengeData.json')
const modifyDataScriptPath = path.join(__dirname, 'modify-data.js')

// Check if the JSON file exists
if (!fs.existsSync(jsonFilePath)) {
    console.log('JSON file not found. Running modify-data.js to create it...')
    try {
        execSync(`node ${modifyDataScriptPath}`)
        console.log('JSON file successfully created.')
    } catch (error) {
        console.error('Error running modify-data.js script:', error)
        process.exit(1) // Exit the process if the script fails
    }
}

app.get('/data', (req, res) => {
    res.sendFile(jsonFilePath)
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
