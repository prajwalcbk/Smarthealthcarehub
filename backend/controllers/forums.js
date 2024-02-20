const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const pool = require('../db/connection');




router.post('/forums', (req, res) => {
  const { title, description , userid  } = req.body;
  
  console.log(req.body)
    
	// Save the user to the database
	pool.query('INSERT INTO health_forum_posts (title, description , user_id ) VALUES (?, ? , ? )', [title, description, userid  ], (err, results) => {
	  if (err) {
	    console.error('Error registering user:', err);
	    res.status(500).send('Internal Server Error');
	    return;
	  }

	 res.status(200).json({ message: 'Forum Posted Successfully' });
	});

});

router.post('/forums/answer', (req, res) => {
  const { forum_id, answer, userid } = req.body;

  // Get the forum_id from the query parameters
  const forumId = req.query.id;

  console.log(req.body);

  // Save the user to the database
  pool.query('INSERT INTO forum_answers (forum_id, answer, user_id) VALUES (?, ?, ?)', [forumId, answer, userid], (err, results) => {
    if (err) {
      console.error('Error answering forum:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    res.status(200).json({ message: 'Forum Answer Posted Successfully' });
  });
});



router.get('/forums', (req, res) => {
  const { offset = 0, limit = 10 } = req.query; // Default offset to 0 and limit to 10 if not provided

  // Parse offset and limit as integers
  const offsetInt = parseInt(offset, 10);
  const limitInt = parseInt(limit, 10);

  // Validate offset and limit values
  if (isNaN(offsetInt) || isNaN(limitInt) || offsetInt < 0 || limitInt <= 0) {
    res.status(400).json({ error: 'Invalid offset or limit' });
    return;
  }

  // Query the database with offset and limit
  pool.query('SELECT * FROM health_forum_posts LIMIT ? OFFSET ?', [limitInt, offsetInt], (err, results) => {
    if (err) {
      console.error('Error fetching forum posts:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    // Send the results back as JSON
    res.status(200).json(results);
  });
});


router.get('/forums/:id', (req, res) => {
  const Id = req.params.id; // Extract the forumid parameter from the request URL

  // Query to fetch the forum post based on the forum_id
  const postQuery = 'SELECT * FROM health_forum_posts WHERE id = ?';

  pool.query(postQuery, [Id], (err, postResults) => {
    if (err) {
      console.error('Error fetching forum post:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    // Query to fetch all answers for the forum_id
    const answerQuery = 'SELECT * FROM forum_answers WHERE forum_id = ?';

    pool.query(answerQuery, [forumId], (err, answerResults) => {
      if (err) {
        console.error('Error fetching forum answers:', err);
        res.status(500).send('Internal Server Error');
        return;
      }

      // Combine the forum post and its answers into a single object
      const responseData = {
        forumPost: postResults[0], // Assuming there's only one forum post per forum ID
        answers: answerResults
      };

      // Send the combined data as a JSON response
      res.status(200).json(responseData);
    });
  });
});

module.exports = router;

