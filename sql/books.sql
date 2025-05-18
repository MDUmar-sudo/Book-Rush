SELECT * FROM public.books
ORDER BY id ASC 

-- databse creation
CREATE DATABASE book_rush;


-- table creation
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
	code VARCHAR(50) UNIQUE,
    title TEXT,
	writer TEXT,
	isbn VARCHAR(15) UNIQUE,
	rating INT,
	date_read DATE,
    book_image BYTEA
);

-- table insertion
INSERT INTO books (code, title, writer, isbn, rating, date_read) VALUES
('late', 'A Million Seconds Too Late', 'Joygopal Podder', '978-9380828749', 8, TO_DATE('05-01-2020', 'DD-MM-YYYY')),
('ranga', 'Ranga Half-Pants', 'Suman Kumar', '978-8184958256', 8, TO_DATE('06-02-2020', 'DD-MM-YYYY')),
('creme', 'Creme Brulee', 'Ramona Sen', '978-8129139771', 7, TO_DATE('25-03-2020', 'DD-MM-YYYY')),
('circle', 'The Golden Circle', 'Christopher S Dodd', '978-1452092300', 5, TO_DATE('26-03-2020', 'DD-MM-YYYY')),
('orange', 'The Orange Hangover', 'Rahul Sini', '978-8184953022', 8, TO_DATE('16-05-2020', 'DD-MM-YYYY')),
('tattoo', 'The Girl with the Dragon Tattoo', 'Stieg Larsson', '978-1529432398', 7, TO_DATE('14-05-2016', 'DD-MM-YYYY')),
('purnima', 'Tracking Purnima', 'Usha Kathir', '978-8184956351', 8, TO_DATE('15-08-2019', 'DD-MM-YYYY')),
('mirror', 'The Mirror of Fire and Dreaming', 'Chitra Banerjee Divakaruni', '978-8186939345', 6, TO_DATE('26-09-2019', 'DD-MM-YYYY')),
('alchemist', 'The Alchemist', 'Paulo Coelho', '978-8172234980', 9, TO_DATE('10-03-2022', 'DD-MM-YYYY')),
('slither', 'Slither Carnal Prose', 'Urmila Deshpande', '978-9380658841', 7, TO_DATE('18-06-2021', 'DD-MM-YYYY')),
('mistakes', 'The 3 Mistakes Of My Life', 'Chetan Bhagat', '978-8129135513', 7, TO_DATE('15-03-2022', 'DD-MM-YYYY')),
('five', 'Five Point Someone', 'Chetan Bhagat', '978-8129135490', 7, TO_DATE('22-09-2021', 'DD-MM-YYYY')),
('rich', 'Rich Dad Poor Dad', 'Robert T. Kiyosaki', '978-1612680194', 8, TO_DATE('12-06-2024', 'DD-MM-YYYY'));

-- book_images are inserted using Javascript with UPDATE cmd


-- sorting by title
SELECT * FROM books ORDER BY title ASC;

-- sorting by the newest
SELECT * FROM books ORDER BY date_read DESC;

-- sorting by the rating(or the best)

SELECT * FROM books ORDER BY rating DESC;