const express = require('express');
const geo = require ('google-geolocation');

var router = express.Router();

router.get('/', function (req, res, next) {
  /*-- geolocation --*/

  // function out (obj) {
  //   console.dir (obj, {
  //     depth: null,
  //     colors: true,
  //   });
  // }
  //
  // // Get data
  // geo ({
  //   key: process.env.GGEO,
  //   timeout: 2000
  // })
  //   .then (out)
  //   .catch (err => {
  //     out (err);
  //     process.exit (1);
  //   })
  // ;
  /*-- Example Response --*/
  var geolocal = {
    location: { lat: 43.3375272, lng: -76.3868797 },
    accuracy: 8777.017411084447
  }
  res.send(geolocal);
});

module.exports = router;
