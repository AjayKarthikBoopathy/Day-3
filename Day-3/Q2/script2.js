var resume=[
    {
      "basics": {
        "name": "John Doe",
        "label": "Programmer",
        "image": "",
        "email": "john@gmail.com",
        "phone": "(912) 555-4321",
        "url": "https://johndoe.com",
        "summary": "A summary of John Doe…",
        "location": {
          "address": "2712 Broadway St",
          "postalCode": "CA 94115",
          "city": "San Francisco",
          "countryCode": "US",
          "region": "California"
        },
        "profiles": [{
          "network": "Twitter",
          "username": "john",
          "url": "https://twitter.com/john"
        }]
      },
        "education": [{
        "institution": "University",
        "url": "https://institution.com/",
        "area": "Software Development",
        "studyType": "Bachelor",
        "startDate": "2011-01-01",
        "endDate": "2013-01-01",
        "score": "4.0",
        "courses": [
          "DB1101 - Basic SQL"
        ]
      }],
      "certificates": [{
        "name": "Certificate",
        "date": "2021-11-07",
        "issuer": "Company",
        "url": "https://certificate.com",
      }],
      "publications": [{
        "name": "Publication",
        "publisher": "Company",
        "releaseDate": "2014-10-01",
        "url": "https://publication.com",
        "summary": "Description…"
      }],
      "skills": [{
        "name": "Web Development",
        "level": "Master",
        "keywords": [
          "HTML",
          "CSS",
          "JavaScript"
        ]
      }],
      "languages": [{
        "language": "English",
        "fluency": "Native speaker"
      }],
      "interests": [{
        "name": "Wildlife",
        "keywords": [
          "Ferrets",
          "Unicorns"
        ]
      }],
      "projects": [{
        "name": "Project",
        "description": "Description…",
        "highlights": [
          "Won award at AIHacks 2016"
        ],
        "keywords": [
          "HTML"
        ],
        "startDate": "2019-01-01",
        "endDate": "2021-01-01",
        "url": "https://project.com/",
        "roles": [
          "Team Lead"
        ],
        "entity": "Entity",
        "type": "application"
      }]
    }
    ]
    
    var parseJSONObject = resume.map(obj => JSON.parse(obj));
    console.log("The original String : ", resume);
    console.log("The JSON Objects : ", parseJSONObject);
    
/*  Output:-
    [ { basics: 
         { name: 'John Doe',
           label: 'Programmer',
           image: '',
           email: 'john@gmail.com',
           phone: '(912) 555-4321',
           url: 'https://johndoe.com',
           summary: 'A summary of John Doe…',
           location: [Object],
           profiles: [Object] },
        education: [ [Object] ],
        certificates: [ [Object] ],
        publications: [ [Object] ],
        skills: [ [Object] ],
        languages: [ [Object] ],
        interests: [ [Object] ],
        projects: [ [Object] ]
     } ]  */
    