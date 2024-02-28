document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const firstname = document.getElementById('firstname').value;
  const lastname = document.getElementById('lastname').value;

  console.log("email: " + email)
  console.log("firstname: " + firstname)
  console.log("lastname: " + lastname)

  fetch('/api/create-contact', {
    method: 'POST',
    headers: {
      'Authorization': `pat-eu1-5860fb9a-54d6-4f89-9ac5-5f482bc7aced`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, firstname, lastname }),
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((error) => {
    console.error('Error:', error);
  });
});
  
document.getElementById('companyForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const domain = document.getElementById('domain').value;
  const name = document.getElementById('name').value;

  console.log("domain: " + domain)
  console.log("name: " + name)

  fetch('/api/create-company', {
    method: 'POST',
    headers: {
      'Authorization': `pat-eu1-5860fb9a-54d6-4f89-9ac5-5f482bc7aced`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ domain, name}),
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((error) => {
    console.error('Error:', error);
  });
});
    

document.getElementById('showContacts').addEventListener('click', () => {
  fetch('/api/read-contacts', {
    method: 'GET',
    headers: {
      'Authorization': `pat-eu1-5860fb9a-54d6-4f89-9ac5-5f482bc7aced`,
      'Content-Type': 'application/json',
    },
  })
  .then(response => { return response.json()})
  .then(data => {
    console.log(data);
    let contactsHTML = '';
    data.results.forEach(contact => {
      contactsHTML += `<p>${contact.properties.firstname} ${contact.properties.lastname} - ${contact.properties.email}</p>`;
    });
    document.getElementById('contactsList').innerHTML = contactsHTML;
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});
 
document.getElementById('showCompanies').addEventListener('click', () => {
  fetch('/api/read-companies', {
    method: 'GET',
    headers: {
      'Authorization': `pat-eu1-5860fb9a-54d6-4f89-9ac5-5f482bc7aced`,
      'Content-Type': 'application/json',
    },
  })
  .then(response => { return response.json()})
  .then(data => {
    console.log(data);
    let companiesHTML = '';
    data.results.forEach(company => {
      companiesHTML += `<p>${company.properties.domain} - ${company.properties.name}</p>`;
    });
    document.getElementById('companiesList').innerHTML = companiesHTML;
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});

  