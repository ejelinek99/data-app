const express = require('express')
const path = require('path')
const fs = require('fs')
const {execSync} = require('node:child_process')
const {differenceInYears} = require('date-fns')

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

// Function to calculate age from birthday
const calculateAge = (birthday) => {
    const today = new Date()
    return differenceInYears(today, birthday)
}

app.get('/data', (req, res) => {
    // Read the JSON file
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err)
            return res.status(500).send('Internal Server Error')
        }

        // Parse the JSON data
        let jsonData = JSON.parse(data)

        // Calculate the age for each record dynamically
        jsonData = jsonData.map((record) => {
            record.Age = calculateAge(record.Birthday)
            return record
        })

        // Send the updated JSON data
        res.json(jsonData)
    })
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})
