const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

const app = express();

// app.get('/', (req, res) => {
//     //res.send('<h2>Express Javascript Begins now</h2>');
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/members', require('./routes/api'));

//app.use(logger);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));