AdressBook_API Documentation

Routes :-

1. Authentication route

2. Contacts route

////////////////////////////////////////////////////////////////////////////////////////////////////////

Authentication route :-

-signup :-
post http://localhost:8082/auth/signup

body:-
{
"name":"Test",
"email":"test@gmail.com",
"password":"Test@12345"
}

result :-
{
"message": "user registered successfully",
"registered_Details": {
"name": "Test",
"email": "test@gmail.com",
"id": "62fba7803990028d0334d907"
}
}

-signin :-
post http://localhost:8082/auth/signin

body:-
{
"email":"test@gmail.com",
"password":"Test@12345"
}

result:-
{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmZiYTc4MDM5OTAwMjhkMDMzNGQ5MDciLCJpYXQiOjE2NjA2NTk3MzV9.7cCnC0sRvMK8j354AJ-umexQmYnCll0N5IhJE4vueKk",
"user": {
"\_id": "62fba7803990028d0334d907",
"name": "Test",
"email": "test@gmail.com"
}
}

-signout:-
get http://localhost:8082/auth/signout

result:-
{
"message": "User signout successfully"
}

////////////////////////////////////////////////////////////////////////////////////////////////////////

Contacts route :-

--create single contact

post http://localhost:8082/api/contact/register

body:-
{
"name":"demouser",
"email":"demouser@gamil.com",
"phone":"9090909090",
"address":"at:demo city:demo"
}

result:-
{
"authorizedContactCreaterId": "62fba7803990028d0334d907",
"name": "demouser",
"email": "demouser@gamil.com",
"phone": 9090909090,
"address": "at:demo city:demo",
"\_id": "62fba9903990028d0334d90d",
"\_\_v": 0
}

--view contact by id
get http://localhost:8082/api/contact/62fba9903990028d0334d90d

result:-
{
"\_id": "62fba9903990028d0334d90d",
"authorizedContactCreaterId": "62fba7803990028d0334d907",
"name": "demouser",
"email": "demouser@gamil.com",
"phone": 9090909090,
"address": "at:demo city:demo",
"\_\_v": 0
}

--update contact by id

put http://localhost:8082/api/contact/update/62fba9903990028d0334d90d

body:-

{
"name":"demotest",
"email":"demouser@gamil.com",
"phone":"9191919191",
"address":"at:testing city:demo"
}

result:-

{
"\_id": "62fba9903990028d0334d90d",
"authorizedContactCreaterId": "62fba7803990028d0334d907",
"name": "demotest",
"email": "demouser@gamil.com",
"phone": 9191919191,
"address": "at:testing city:demo",
"\_\_v": 0
}

--bulk contact register

post http://localhost:8082/api/bulk/contact/register

body:-

[{
"name":"demotest1",
"email":"demouser1@gamil.com",
"phone":"9191919101",
"address":"at:testing city:demo"
},{
"name":"demotest2",
"email":"demouser2@gamil.com",
"phone":"9191919102",
"address":"at:testing city:demo"
},{
"name":"demotest3",
"email":"demouser3@gamil.com",
"phone":"9191919103",
"address":"at:testing city:demo"
}]

results:-

[
{
"authorizedContactCreaterId": "62fba7803990028d0334d907",
"name": "demotest1",
"email": "demouser1@gamil.com",
"phone": 9191919101,
"address": "at:testing city:demo",
"_id": "62fbac89b96685a41c1a86ac",
"__v": 0
},
{
"authorizedContactCreaterId": "62fba7803990028d0334d907",
"name": "demotest2",
"email": "demouser2@gamil.com",
"phone": 9191919102,
"address": "at:testing city:demo",
"_id": "62fbac89b96685a41c1a86ad",
"__v": 0
},
{
"authorizedContactCreaterId": "62fba7803990028d0334d907",
"name": "demotest3",
"email": "demouser3@gamil.com",
"phone": 9191919103,
"address": "at:testing city:demo",
"_id": "62fbac89b96685a41c1a86ae",
"__v": 0
}
]

--get all contacts

get http://localhost:8082/api/contacts

results:

[
{
"_id": "62fb88bf4b10172009bb8602",
"authorizedContactCreaterId": "62fb401ea9bfadaa1eb2995d",
"name": "cbjdbcdbcbc",
"email": "demo2xbsj34xbjs223@gamil.com",
"phone": 6767676765,
"address": "nkxnksnksnxk",
"__v": 0
},
{
"_id": "62fb88bf4b10172009bb8603",
"authorizedContactCreaterId": "62fb401ea9bfadaa1eb2995d",
"name": "cbjdbxbjbcdbcbc",
"email": "demo2xsb56jsbsjxbjs223@gamil.com",
"phone": 6767676766,
"address": "nkxnksnksnxk",
"__v": 0
},
{
"_id": "62fb88bf4b10172009bb8604",
"authorizedContactCreaterId": "62fb401ea9bfadaa1eb2995d",
"name": "cbjdbxsbjbxsjcdbcbc",
"email": "demo2ehe78exbsjxbjs223@gamil.com",
"phone": 6767676767,
"address": "nkxnksnksnxk",
"__v": 0
},
{
"_id": "62fb897dce5c686a75965c7b",
"authorizedContactCreaterId": "62fb401ea9bfadaa1eb2995d",
"name": "cbjdbcdbcbc",
"email": "demo2xdejdjbsj34xbjs223@gamil.com",
"phone": 6767676700,
"address": "nkxnksnksnxk",
"__v": 0
},
{
"_id": "62fb897dce5c686a75965c7c",
"authorizedContactCreaterId": "62fb401ea9bfadaa1eb2995d",
"name": "cbjdbxbjbcdbcbc",
"email": "demo2xsb56jsbsjxddeebjs223@gamil.com",
"phone": 6767676018,
"address": "nkxnksnksnxk",
"__v": 0
},
{
"_id": "62fb897dce5c686a75965c7d",
"authorizedContactCreaterId": "62fb401ea9bfadaa1eb2995d",
"name": "cbjdbxsbjbxsjcdbcbc",
"email": "demo2ehe78exbsedejdjxbjs223@gamil.com",
"phone": 6767676701,
"address": "nkxnksnksnxk",
"__v": 0
},
{
"_id": "62fba9903990028d0334d90d",
"authorizedContactCreaterId": "62fba7803990028d0334d907",
"name": "demotest",
"email": "demouser@gamil.com",
"phone": 9191919191,
"address": "at:testing city:demo",
"__v": 0
},
{
"_id": "62fbac89b96685a41c1a86ac",
"authorizedContactCreaterId": "62fba7803990028d0334d907",
"name": "demotest1",
"email": "demouser1@gamil.com",
"phone": 9191919101,
"address": "at:testing city:demo",
"__v": 0
},
{
"_id": "62fbac89b96685a41c1a86ad",
"authorizedContactCreaterId": "62fba7803990028d0334d907",
"name": "demotest2",
"email": "demouser2@gamil.com",
"phone": 9191919102,
"address": "at:testing city:demo",
"__v": 0
},
{
"_id": "62fbac89b96685a41c1a86ae",
"authorizedContactCreaterId": "62fba7803990028d0334d907",
"name": "demotest3",
"email": "demouser3@gamil.com",
"phone": 9191919103,
"address": "at:testing city:demo",
"__v": 0
}
]

--get contacts by pagination

get http://localhost:8082/api/contacts/paginated?page=1&limit=2

result:-

{
"next": {
"page": 2,
"limit": 2
},
"results": [
{
"_id": "62fb88bf4b10172009bb8602",
"authorizedContactCreaterId": "62fb401ea9bfadaa1eb2995d",
"name": "cbjdbcdbcbc",
"email": "demo2xbsj34xbjs223@gamil.com",
"phone": 6767676765,
"address": "nkxnksnksnxk",
"__v": 0
},
{
"_id": "62fb88bf4b10172009bb8603",
"authorizedContactCreaterId": "62fb401ea9bfadaa1eb2995d",
"name": "cbjdbxbjbcdbcbc",
"email": "demo2xsb56jsbsjxbjs223@gamil.com",
"phone": 6767676766,
"address": "nkxnksnksnxk",
"__v": 0
}
]
}

--Delete the contact by ID

delete http://localhost:8082/api/contact/delete/62fb88bf4b10172009bb8602

results:-

{
"message": "contact is successfully deleted",
"deletedContact": {
"\_id": "62fb88bf4b10172009bb8602",
"authorizedContactCreaterId": "62fb401ea9bfadaa1eb2995d",
"name": "cbjdbcdbcbc",
"email": "demo2xbsj34xbjs223@gamil.com",
"phone": 6767676765,
"address": "nkxnksnksnxk",
"\_\_v": 0
}
}

--to retrive the token

get http://localhost:8082/api/token

result:-

{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmZiYTc4MDM5OTAwMjhkMDMzNGQ5MDciLCJpYXQiOjE2NjA2NTk5MjR9.byitAPd1Bamvocg6EBiwRnePvUkJtBK1JZMtSrKv-xc"
}
