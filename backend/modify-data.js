const fs = require('fs')
const csv = require('csv-parser')
const {parse, format} = require('date-fns')

// Input and output file paths
const inputFilePath = './ProgrammingChallengeData.csv'
const outputFilePath = './ProgrammingChallengeData.json'

// Function to format the date
const formatDate = (date) => {
    const dateFormats = ['MM/dd/yyyy', 'MMMM d, yyyy', 'M/d/yyyy']

    let parsedDate

    // Loops through the date formats and tries until the parse function is able to properly convert the date
    // Reason for this is because parse can only check for one dateFormat at a time
    for (const dateFormat of dateFormats) {
        try {
            parsedDate = parse(date, dateFormat, new Date())

            // Check if the parsed date is valid
            if (parsedDate instanceof Date && !isNaN(parsedDate)) {
                break
            }
        } catch (error) {
            // Continue to the next date format
        }
    }

    // If parsedDate is still undefined, return the original date
    if (!parsedDate || isNaN(parsedDate)) {
        console.error(`Unable to parse date: ${date}`)
        return date
    }

    return format(parsedDate, 'MM/dd/yyyy')
}

// Read and convert CSV to JSON
const results = []

fs.createReadStream(inputFilePath)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        // Format the Birthday field in each record
        const formattedResults = results.map((record) => {
            try {
                record.Birthday = formatDate(record.Birthday)
            } catch (error) {
                console.error(`Error parsing date for record: ${JSON.stringify(record)}`, error)
            }
            return record
        })

        // Write the JSON data to the output file
        fs.writeFile(outputFilePath, JSON.stringify(formattedResults, null, 2), (err) => {
            if (err) {
                console.error('Error writing JSON file:', err)
            } else {
                console.log('JSON file successfully written:', outputFilePath)
            }
        })
    })
