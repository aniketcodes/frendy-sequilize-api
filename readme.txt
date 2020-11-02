SET UP DUMMY DATABASE
1. Create a database named 'frendy'
2. Import frendy.sql from exported_databases 


ROUTES
=======

Route to fetch all cities
http://localhost:8000/api/cities/allCities

Route to fetch all orders
http://localhost:8000/api/orders/all

Route to fetch order by city
http://localhost:8000/api/orders/Delhi/

Route to fetch order by city and by week day
http://localhost:8000/api/orders/Delhi/Thursday

Route to fetch order by city , by week day and by slot
http://localhost:8000/api/orders/Delhi/Thursday/after10