CERATE DATABASE todo_database; 

--\c into todo_database

CREATE TABEL todo(
  todo_id SERIAL PRIMARY KEY
  description VARCHAR(255)
); 