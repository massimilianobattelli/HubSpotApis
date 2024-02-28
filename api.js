const express = require('express');
const router = express.Router();
const hubspot = require('@hubspot/api-client');
const YOUR_ACCESS_TOKEN = 'pat-eu1-5860fb9a-54d6-4f89-9ac5-5f482bc7aced'
const hubspotClient = new hubspot.Client({ accessToken: YOUR_ACCESS_TOKEN })

router.post('/create-contact', async (req, res) => {
  const { email, firstname, lastname } = req.body;
  const properties = {
    email,
    firstname,
    lastname
  };
  const contactObj = { properties };
  try {
    const apiResponse = await hubspotClient.crm.contacts.basicApi.create(contactObj);
    res.json(apiResponse.body);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.post('/create-company', async (req, res) => {
  const { domain, name } = req.body;
  const properties = {
    domain,
    name
  };
  const contactObj = { properties };
  try {
    const apiResponse = await hubspotClient.crm.companies.basicApi.create(contactObj);
    res.json(apiResponse.body);
  } catch (e) {
    res.status(500).json(e);
  }
});

router.get('/read-contacts', async (req, res) => {
  const limit = 50;
  const after = undefined;
  const properties = undefined;
  const propertiesWithHistory = undefined;
  const associations = undefined;
  const archived = false;
  try {
    const apiResponse = await hubspotClient.crm.contacts.basicApi.getPage(limit, after, properties, propertiesWithHistory, associations, archived);
    console.log(JSON.stringify(apiResponse, null, 2));
    res.json(apiResponse); 
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.toString() }); 
  }
});

router.get('/read-companies', async (req, res) => {
  const limit = 50;
  const after = undefined;
  const properties = undefined;
  const propertiesWithHistory = undefined;
  const associations = undefined;
  const archived = false;
  try {
    const apiResponse = await hubspotClient.crm.companies.basicApi.getPage(limit, after, properties, propertiesWithHistory, associations, archived);
    console.log(JSON.stringify(apiResponse, null, 2));
    res.json(apiResponse); 
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.toString() }); 
  }
});


// Aggiungi altre API qui

module.exports = router;
