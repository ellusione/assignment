'use strict'

const fs = require('fs');
const request = require('request')

fs.createReadStream('sample_file.txt')
    .pipe(request.post({
        'url': 'http://localhost:3000/file',
        'headers': {
            'Content-Type': 'text/plain'
        }}))
    .on('complete', (res) => {
        console.log('Received response', res.statusCode)
    })
    .on('error', (err) => {
        console.error('Error response', err)
    })