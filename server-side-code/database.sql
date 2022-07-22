
create TABLE cities(
    id SERIAL PRIMARY KEY,
    founding_date INTEGER,
    city_name VARCHAR(255),
    population INTEGER,
    distance INTEGER
);