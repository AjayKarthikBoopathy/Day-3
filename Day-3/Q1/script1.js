// For Loop:-

var json=[{ “id” : “1”,
            "msg"   : "hi",
            "tid" : "2013-05-05 23:35",
            "fromWho": "hello1@email.se"
        },
        {
            "id" : "2", 
            "msg"   : "there",
            "tid" : "2013-05-05 23:45",
            "fromWho": "hello2@email.se"
        }];

for(var i = 0; i < json.length; i++) {
     var obj = json[i];
     console.log(obj.id);
     console.log(obj.fromWho);
}

/* Output:-
1
hello1@email.se
2
hello2@email.se */

// For In Loop:-

var data=[{
   "id": "1",
   "msg": "hi",
   "tid": "2013-05-05 23:35",
   "fromWho": "hello1@email.se"
},
{
   "id": "2",
   "msg": "there",
   "tid": "2013-05-05 23:45",
   "fromWho": "hello2@email.se"
}];


for (var key in data) {
    if (data.hasOwnProperty(key)) {
    console.log(data[key].id);
    console.log(data[key].fromWho);
   }
}

/* Output:-
1
hello1@email.se
2
hello2@email.se */


// For Each Loop:-
var datesBooking = [
      {"date": "04\/24\/2018"},
      {"date": "04\/25\/2018"}
      ];
datesBooking.forEach(function(data, index) {
      console.log(data);
    });

/* Output:-
{ date: '04/24/2018' }
{ date: '04/25/2018' } */

// For Of Loop:-
var mycars = [{name:'Tata'}, {name:'BMW'}];
for (var car of mycars) 
  {
  console.log(car);
}

/* Output:-
{ name: 'Tata' }
{ name: 'BMW' } */
