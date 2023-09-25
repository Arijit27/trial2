
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const ejs = require('ejs');
const app = express();
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));






mongoose.connect('mongodb+srv://arijitganguly:Arijit2025@cluster0.zegn2dd.mongodb.net/ALL_AGENCY?retryWrites=true&w=majority&appName=AtlasApp')
  .then(() => {
    console.log('connection successfull');
  })
  .catch((err) => {
    console.log(err);
  });


const agencySchema = new mongoose.Schema({
  agency: String,
  name: String,
  id: String,
  state: String,
  district: String,
  pincode: Number,
  contact: Number,
  altcontact: Number,
})



const agentSchema = new mongoose.Schema({
  agency: {
    type: String,
    required: true,
  },
  registrationId: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});


app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
}));

app.use(express.static(__dirname + '/public'));

//Agent Collection
const agent = mongoose.model('agent', agentSchema);

//User collection
const people = mongoose.model('people', userSchema);

//All Agencys Collection
const fire = mongoose.model('fire', agencySchema);
const flood = mongoose.model('flood', agencySchema);
const electric = mongoose.model('electric', agencySchema);
const police = mongoose.model('police', agencySchema);
const ambulance = mongoose.model('ambulance', agencySchema);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.post('/fire', async (req, res) => {
  try {
    const agncy = 'Fire Brigade Agency';
    const n = req.body.name;
    const i = req.body.rid;
    const st = req.body.state;
    const ds = req.body.district;
    const pin = req.body.pincode;
    const cont = req.body.number1;
    const altcont = req.body.number2;



    // Check if the data already exists in the database
    const existingData = await fire.findOne({ id: i });


    if (existingData != null) {
      res.json({ alreadyExists: true });
    } else {
      // Data doesn't exist, so update the database
      const newdata = new fire({
        agency: agncy,
        name: n,
        id: i,
        state: st,
        district: ds,
        pincode: pin,
        contact: cont,
        altcontact: altcont,
      })
      newdata.save();
      res.json({ alreadyExists: false });
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/flood', async (req, res) => {
  try {
    const agncy = 'Flood Rescue Agency';
    const n = req.body.name;
    const i = req.body.rid;
    const st = req.body.state;
    const ds = req.body.district;
    const pin = req.body.pincode;
    const cont = req.body.number1;
    const altcont = req.body.number2;


    // Check if the data already exists in the database
    const existingData = await flood.findOne({ id: i });


    if (existingData != null) {
      res.json({ alreadyExists: true });
    } else {
      // Data doesn't exist, so update the database
      const newdata = new flood({
        agency: agncy,
        name: n,
        id: i,
        state: st,
        district: ds,
        pincode: pin,
        contact: cont,
        altcontact: altcont,
      })
      newdata.save();
      res.json({ alreadyExists: false });
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/electric', async (req, res) => {
  try {
    const agncy = 'Electric Agency';
    const n = req.body.name;
    const i = req.body.rid;
    const st = req.body.state;
    const ds = req.body.district;
    const pin = req.body.pincode;
    const cont = req.body.number1;
    const altcont = req.body.number2;



    // Check if the data already exists in the database
    const existingData = await electric.findOne({ id: i });


    if (existingData != null) {
      res.json({ alreadyExists: true });
    } else {
      // Data doesn't exist, so update the database
      const newdata = new electric({
        agency: agncy,
        name: n,
        id: i,
        state: st,
        district: ds,
        pincode: pin,
        contact: cont,
        altcontact: altcont,
      })
      newdata.save();
      res.json({ alreadyExists: false });
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/police', async (req, res) => {
  try {
    const agncy = 'Police Agency';
    const n = req.body.name;
    const i = req.body.rid;
    const st = req.body.state;
    const ds = req.body.district;
    const pin = req.body.pincode;
    const cont = req.body.number1;
    const altcont = req.body.number2;



    // Check if the data already exists in the database
    const existingData = await police.findOne({ id: i });

    if (existingData != null) {
      res.json({ alreadyExists: true });
    } else {
      // Data doesn't exist, so update the database
      const newdata = new police({
        agency: agncy,
        name: n,
        id: i,
        state: st,
        district: ds,
        pincode: pin,
        contact: cont,
        altcontact: altcont,
      })
      newdata.save();
      res.json({ alreadyExists: false });
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }

});
app.post('/ambulance', async (req, res) => {

  const agncy = 'Ambulance Agency';
  const n = req.body.name;
  const i = req.body.rid;
  const st = req.body.state;
  const ds = req.body.district;
  const pin = req.body.pincode;
  const cont = req.body.number1;
  const altcont = req.body.number2;



  // Check if the data already exists in the database
  // SHOW DATA

  const existingData = await ambulance.findOne({ id: i });

  if (existingData != null) {
    res.json({ alreadyExists: true });
  } else {
    // Data doesn't exist, so update the database
    const newdata = new ambulance({
      agency: agncy,
      name: n,
      id: i,
      state: st,
      district: ds,
      pincode: pin,
      contact: cont,
      altcontact: altcont,
    })
    newdata.save();
    res.json({ alreadyExists: false });
  }

});

app.get('/getData', async (req, res) => {
  try {
    const company = req.query.agency;
    const idd = req.query.reg;

    if (company == "fire") {
      const data = await fire.findOne({ id: idd });
      if (data == null) {
        const mainData = {
          message: 'Please at First Complete Your Registration, Thank You',
        }
        res.render('home', { mainData });
      } else {
        const mainData = {
          "Agency Type :": data.agency,
          "Agency Name :": data.name,
          "Govt. Registration No :": data.id,
          "State ": data.state,
          "district": data.district,
          "Pincode :": data.pincode,
          "Contact No. :": data.contact,
          "Alternative Contact No :": data.altcontact,
        }
        res.render('home', { mainData });
      }
    }
    else if (company == "flood") {

      const data = await flood.findOne({ id: idd });

      if (data == null) {
        const mainData = {
          message: 'Please at First Complete Your Registration, Thank You',
        }
        res.render('home', { mainData });
      } else {
        const mainData = {
          "Agency Type :": data.agency,
          "Agency Name :": data.name,
          "Govt. Registration No :": data.id,
          "State ": data.state,
          "district": data.district,
          "Pincode :": data.pincode,
          "Contact No. :": data.contact,
          "Alternative Contact No :": data.altcontact,
        }
        res.render('home', { mainData });
      }
    }

    else if (company == "electric") {

      const data = await electric.findOne({ id: idd });

      if (data == null) {
        const mainData = {
          message: 'Please at First Complete Your Registration, Thank You',
        }
        res.render('home', { mainData });
      } else {
        const mainData = {
          "Agency Type :": data.agency,
          "Agency Name :": data.name,
          "Govt. Registration No :": data.id,
          "State ": data.state,
          "district": data.district,
          "Pincode :": data.pincode,
          "Contact No. :": data.contact,
          "Alternative Contact No :": data.altcontact,
        }
        res.render('home', { mainData });
      }
    }

    else if (company == "police") {

      const data = await police.findOne({ id: idd });

      if (data == null) {
        const mainData = {
          message: 'Please at First Complete Your Registration, Thank You',
        }
        res.render('home', { mainData });
      } else {
        const mainData = {
          "Agency Type :": data.agency,
          "Agency Name :": data.name,
          "Govt. Registration No :": data.id,
          "State ": data.state,
          "district": data.district,
          "Pincode :": data.pincode,
          "Contact No. :": data.contact,
          "Alternative Contact No :": data.altcontact,
        }
        res.render('home', { mainData });
      }
    }
    else if (company == "ambulance") {

      const data = await ambulance.findOne({ id: idd });
      if (data == null) {
        const mainData = {
          message: 'Please at First Complete Your Registration, Thank You',
        }
        res.render('home', { mainData });
      } else {
        const mainData = {
          "Agency Type :": data.agency,
          "Agency Name :": data.name,
          "Govt. Registration No :": data.id,
          "State ": data.state,
          "district": data.district,
          "Pincode :": data.pincode,
          "Contact No. :": data.contact,
          "Alternative Contact No :": data.altcontact,
        }
        res.render('home', { mainData });
      }
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});



// UPDATE DATA 




app.put('/fire', async (req, res) => {
  try {
    const i = req.body.rid;

    const update = {
      name: req.body.name,
      state: req.body.state,
      district: req.body.district,
      pincode: req.body.pincode,
      contact: req.body.number1,
      altcontact: req.body.number2,
    }

    // Check if the data already exists in the database
    const updatedData = await fire.findOneAndUpdate({ id: i }, update, { new: true });

    if (updatedData != null) {
      res.json({ alreadyExists: true });
    } else {
      // Data doesn't exist, so update the database

      res.json({ alreadyExists: false });
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/flood', async (req, res) => {
  try {
    const i = req.body.rid;

    const update = {
      name: req.body.name,
      state: req.body.state,
      district: req.body.district,
      pincode: req.body.pincode,
      contact: req.body.number1,
      altcontact: req.body.number2,
    }

    // Check if the data already exists in the database
    const updatedData = await flood.findOneAndUpdate({ id: i }, update, { new: true });

    if (updatedData != null) {
      res.json({ alreadyExists: true });
    } else {
      // Data doesn't exist, so update the database

      res.json({ alreadyExists: false });
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/electric', async (req, res) => {
  try {
    const i = req.body.rid;

    const update = {
      name: req.body.name,
      state: req.body.state,
      district: req.body.district,
      pincode: req.body.pincode,
      contact: req.body.number1,
      altcontact: req.body.number2,
    }

    // Check if the data already exists in the database
    const updatedData = await electric.findOneAndUpdate({ id: i }, update, { new: true });

    if (updatedData != null) {
      res.json({ alreadyExists: true });
    } else {
      // Data doesn't exist, so update the database

      res.json({ alreadyExists: false });
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.put('/police', async (req, res) => {

  try {
    const i = req.body.rid;

    const update = {
      name: req.body.name,
      state: req.body.state,
      district: req.body.district,
      pincode: req.body.pincode,
      contact: req.body.number1,
      altcontact: req.body.number2,
    }

    // Check if the data already exists in the database
    const updatedData = await police.findOneAndUpdate({ id: i }, update, { new: true });

    if (updatedData != null) {
      res.json({ alreadyExists: true });
    } else {
      // Data doesn't exist, so update the database

      res.json({ alreadyExists: false });
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }

});

app.put('/ambulance', async (req, res) => {
  try {
    const i = req.body.rid;
    const update = {
      name: req.body.name,
      state: req.body.state,
      district: req.body.district,
      pincode: req.body.pincode,
      contact: req.body.number1,
      altcontact: req.body.number2,
    }

    // Check if the data already exists in the database
    const updatedData = await ambulance.findOneAndUpdate({ id: i }, update, { new: true });

    if (updatedData != null) {
      res.json({ alreadyExists: true });
    } else {
      // Data doesn't exist, so update the database

      res.json({ alreadyExists: false });
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }

});




// START FUNCTION

app.get('/', (req, res) => {
  if (req.session.user) {
    // If the user is logged in, redirect to the agent.html page
    console.log("logout");
    res.redirect('/index.html');
  } else {
    // Otherwise, display the login form
    res.sendFile(__dirname + '/public/index.html');
  }
});



// AGENT SIGN UP

app.post('/signupagent', async (req, res) => {
  try {
    const { agency, registrationId, email, password } = req.body;

    // Check if email or registration ID already exists
    const existingUser = await agent.findOne({ $or: [{ registrationId }, { email }] });

    if (existingUser != null) {

      res.send(`
      <script>
        alert('Already Registerd , Please sign in');
        window.location.href = '/agentlogin.html';
      </script>
    `);
    }
    else {
      // Create a new user
      const newUser = new agent({ agency, registrationId, email, password });
      await newUser.save();

      res.send(`
      <script>
        alert('Registration Done Successfully , Please Login');
        window.location.href = '/agentlogin.html';
      </script>
    `);
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }

});

//AGENT LOGIN

app.post('/loginagent', async (req, res) => {
  try {
    const eml = req.body.email;
    const pass = req.body.password;
    const user = await agent.findOne({ email: eml });
    if (user != null) {
      if (user.password === pass) {
        req.session.user = user;
        res.send(`
        <script>
          window.location.href = '/agent.html';
        </script>
      `);
      }
      else {
        // res.json({ alreadyExists: false });;
        res.send(`
    <script>
      alert('Invalid Credentials');
      window.location.href = '/agentlogin.html';
    </script>
  `);
      }
    } else {
      res.send(`
    <script>
      alert('Please Signup first');
      window.location.href = '/agentlogin.html';
    </script>
  `);
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }

});

// AGENT LOGOUT

app.get('/logoutagent', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log("logout");
      res.redirect('/');
    }
  });
});





// USER  SIGN UP

app.post('/signupuser', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Check if email or registration ID already exists
    const existingUser = await people.findOne({ email });

    if (existingUser != null) {
      res.send(`
      <script>
        alert('Email already exists , Please sign in');
        window.location.href = '/userlogin.html';
      </script>
    `);
    }
    else {
      // Create a new user
      const newUser = new people({ name, email, password });
      await newUser.save();
      res.send(`
      <script>
        alert('Registration done successfully,Please login');
        window.location.href = '/userlogin.html';
      </script>
    `);
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// USER LOGIN

app.post('/loginuser', async (req, res) => {
  try {
    const eml = req.body.email;
    const pass = req.body.password;
    const user = await people.findOne({ email: eml });
    if (user != null) {
      if (user.password === pass) {
        req.session.user = user;
        res.redirect('/userhome.html');

      } else {
        res.send(`
      <script>
        alert('Invalid Credentials');
        window.location.href = '/userlogin.html';
      </script>
    `);
      }
    }
    else {
      res.send(`
    <script>
      alert('Please Signup first');
      window.location.href = '/userlogin.html';
    </script>
  `);
    }
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }

});

// USER LOGOUT

app.get('/logoutuser', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    } else {
      console.log("hi");
      res.redirect('/');
    }
  });
});






// Main Khala using Pincode fetching Data






app.get('/getUrgentData', async (req, res) => {
  const company = req.query.agency;
  const picd = req.query.pincode;

  if (company == "fire") {
    const data = await fire.find({ pincode: picd });

    if (data[0] == null) {
      res.send(`
      <script>
        alert('There is no fire rescue agency available in this pincode , please try with another nearest pincode');
        window.location.href = '/userhome.html';
      </script>
    `);
    } else {

      res.render('urgentdata', { data });
    }
  }
  else if (company == "flood") {

    const data = await flood.find({ pincode: picd });
    console.log(data);
    if (data[0] == null) {
      res.send(`
      <script>
        alert('There is no flood rescue agency available in this pincode , please try with another nearest pincode');
        window.location.href = '/userhome.html';
      </script>
    `);
    } else {

      res.render('urgentdata', { data });
    }
  }

  else if (company == "electric") {

    const data = await electric.find({ pincode: picd });

    if (data[0] == null) {
      res.send(`
      <script>
        alert('There is no electric agency available in this pincode , please try with another nearest pincode');
        window.location.href = '/userhome.html';
      </script>
    `);
    } else {

      res.render('urgentdata', { data });
    }
  }

  else if (company == "police") {

    const data = await police.find({ pincode: picd });

    if (data[0] == null) {
      res.send(`
      <script>
        alert('There is no police agency available in this pincode , please try with another nearest pincode');
        window.location.href = '/userhome.html';
      </script>
    `);
    } else {
      res.render('urgentdata', { data });
    }

  }
  else if (company == "ambulance") {

    const data = await ambulance.find({ pincode: picd });
    if (data[0] == null) {
      res.send(`
      <script>
        alert('There is no ambulance agency available in this pincode , please try with another nearest pincode');
        window.location.href = '/userhome.html';
      </script>
    `);
    } else {

      res.render('urgentdata', { data });
    }
  }
});








const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Server is running on port 3000');
});
