const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/myapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(error => {
  console.log(error);
});

// Define a schema for the user data
const userSchema = new mongoose.Schema({
  username: String,
  password: String
});

// Create a Mongoose model for the user data
const User = mongoose.model('User', userSchema);

// Define an endpoint to save user data
app.post('/users', (req, res) => {
  const { username, password } = req.body;

  // Create a new user document
  const user = new User({
    username,
    password
  });

  // Save the user to the database
  user.save()
    .then(() => {
      res.status(201).send('User created successfully');
    })
    .catch(error => {
      console.log(error);
      res.status(500).send('Error creating user');
    });
});

// Define an endpoint to authenticate user data
app.post('/login', (req, res) => {
    const { username, password } = req.body;
  
    // Find the user in the database
    User.findOne({ username, password })
      .then(user => {
        if (user) {
          res.status(200).send('Login successful');
        } else {
          res.status(401).send('Invalid credentials');
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).send('Error authenticating user');
      });
  });

  // Define a schema for the playlist data
const playlistSchema = new mongoose.Schema({
    startDate: Date,
    endDate: Date,
    cuisine: String
  });
  
  // Create a Mongoose model for the playlist data
  const Playlist = mongoose.model('Playlist', playlistSchema);
  
  // api to save playlist
  app.post('/playlist', (req, res) => {
    const { startDate, endDate, cuisine } = req.body;
  
    // Create a new playlist
    const playlist = new Playlist({ startDate, endDate, cuisine });
  
    // Save the playlist to the database
    playlist.save()
      .then(() => {
        res.status(201).send('Playlist created successfully');
      })
      .catch(error => {
        console.log(error);
        res.status(500).send('Error creating playlist');
      });
  });

// Retrieves playlist from mongoose
  app.get('/playlist', (req, res) => {
    Playlist.find({})
      .then(playlists => {
        res.status(200).send(playlists);
      })
      .catch(error => {
        console.log(error);
        res.status(500).send('Error retrieving playlists');
      });
  });
  

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});