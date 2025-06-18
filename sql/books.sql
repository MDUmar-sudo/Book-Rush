SELECT * FROM public.books
ORDER BY id ASC 

-- databse creation
CREATE DATABASE book_rush;

/* 
	TABLE CREATION 
*/


-- Table books

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

-- Table comments

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
	name VARCHAR(100),
	email VARCHAR(100),
    comment TEXT,
	date DATE
);

-- table insertion
INSERT INTO books (code, title, writer, isbn, rating, date_read) VALUES
('late', 'A Million Seconds Too Late', 'Joygopal Podder', '978-9380828749', 8, TO_DATE('05-01-2020', 'DD-MM-YYYY')),
('ranga', 'Ranga Half-Pants', 'Suman Kumar', '978-8184958256', 8, TO_DATE('06-02-2020', 'DD-MM-YYYY')),
('creme', 'Crème Brûlée', 'Ramona Sen', '978-8129139771', 7, TO_DATE('25-03-2020', 'DD-MM-YYYY')),
('circle', 'The Golden Circle', 'Christopher S Dodd', '978-1452092300', 5, TO_DATE('26-03-2020', 'DD-MM-YYYY')),
('orange', 'The Orange Hangover', 'Rahul Sini', '978-8184953022', 8, TO_DATE('16-05-2020', 'DD-MM-YYYY')),
('tattoo', 'The Girl with the Dragon Tattoo', 'Stieg Larsson', '978-1529432398', 7, TO_DATE('14-05-2016', 'DD-MM-YYYY')),
('purnima', 'Tracking Purnima', 'Usha Kathir', '978-8184956351', 8, TO_DATE('15-08-2019', 'DD-MM-YYYY')),
('mirror', 'The Mirror of Fire and Dreaming', 'Chitra Banerjee Divakaruni', '978-8186939345', 6, TO_DATE('26-09-2019', 'DD-MM-YYYY')),
('alchemist', 'The Alchemist', 'Paulo Coelho', '978-8172234980', 9, TO_DATE('10-03-2022', 'DD-MM-YYYY')),
('slither', 'Slither: Carnal Prose', 'Urmila Deshpande', '978-9380658841', 7, TO_DATE('18-06-2021', 'DD-MM-YYYY')),
('mistakes', 'The 3 Mistakes Of My Life', 'Chetan Bhagat', '978-8129135513', 7, TO_DATE('15-03-2022', 'DD-MM-YYYY')),
('five', 'Five Point Someone', 'Chetan Bhagat', '978-8129135490', 7, TO_DATE('22-09-2021', 'DD-MM-YYYY')),
('rich', 'Rich Dad Poor Dad', 'Robert T. Kiyosaki', '978-1612680194', 8, TO_DATE('12-06-2024', 'DD-MM-YYYY')),
('salesman', 'The Greatest Salesman In The World', 'Og Mandino', '978-0553277579', 9, TO_DATE('20-07-2024', 'DD-MM-YYYY')),
('wish', 'Wish I Could Tell You', 'Durjoy Datta', '978-0143448334', 7, TO_DATE('05-05-2023', 'DD-MM-YYYY'));


-- book_images are inserted using Javascript with UPDATE cmd


-- sorting by title
SELECT * FROM books ORDER BY title ASC;

-- sorting by the newest
SELECT * FROM books ORDER BY date_read DESC;

-- sorting by the rating(or the best)

SELECT * FROM books ORDER BY rating DESC;


-- Adding book summary and buying link columns

UPDATE books SET 
  summary =  $$A Million Seconds Too Late by Joygopal Podder is a gripping crime thriller that delves into the dark underbelly of corporate power and familial secrets. The narrative kicks off with the shocking murder of a tycoon's daughter in her sleep, prompting a critical question: was she the intended victim, or was the actual target her twin sister?

			 As the investigation unfolds, detectives from the Gurgaon Police find themselves entangled in a complex web of deceit and hidden agendas. The plot thickens as they uncover the mysterious activities of the murdered girl's former employers, leading them to suspect a sinister conspiracy within the tycoon's own industrial empire. The story navigates through a labyrinth of plots and sub-plots, each revealing deeper layers of intrigue and betrayal.

			 Book masterfully crafts a narrative that keeps readers on the edge of their seats, blending elements of suspense, mystery, and corporate espionage. The novel not only explores the complexities of familial relationships but also highlights the lengths individuals will go to protect their secrets and ambitions. Set against the backdrop of India's bustling corporate world, A Million Seconds Too Late is a compelling read that challenges perceptions and keeps readers guessing until the very end.$$,
  buying_link = 'https://www.amazon.in/Million-Seconds-Too-Late/dp/9380828748/ref=tmm_pap_swatch_0'
WHERE title = 'A Million Seconds Too Late';

UPDATE books SET 
  summary = $$Ranga Half-Pants by Suman Kumar is a tender and nostalgic coming-of-age story set in a small Andhra town in 1986. At its heart is 14-year-old Ranganathan—Ranga to everyone—who returns to school after the holidays only to discover he’s now the only boy still wearing half-pants. For Ranga, these short trousers become a symbol of everything he lacks: respect, confidence, and the chance to be seen as a grown-up. Bullied by Joel, his schoolyard nemesis, and feeling increasingly distanced from his best friend Kaivalya, Ranga is caught in that awkward, painful space between childhood and adolescence.

			Meanwhile, across town, a very different story unfolds. Prasad, a 24-year-old man with a violent past, is trying to walk away from the life he's built with blood and rage. He dreams of a better future with Tabassum, the woman he loves. But escaping that life isn’t easy, and the people he left behind have no intention of letting him go quietly.

			This book weaves the two stories together with warmth and grit, showing how courage, identity, and hope can take many shapes. Sometimes, it’s the fight for full pants; sometimes, it’s the fight for a clean slate. Either way, growing up is never easy.$$,
  buying_link = 'https://www.amazon.in/Ranga-Half-Pants-Suman-Kumar/dp/8184958250'
WHERE title = 'Ranga Half-Pants';

UPDATE books SET 
  summary = $$Crème Brûlée by Ramona Sen is a delightful, witty, and heartwarming tale set in the vibrant city of Calcutta. At its center is Aabir Mookerjee, a 30-year-old Oxford-returned Bengali anglophile who runs a charming eatery named E&B (Eggs & Bacon), renowned for its delectable chocolate mousse. Aabir's life takes an unexpected turn when The Mad Hatter, a new café, opens across town, managed by the quirky and captivating Kimaya Kapoor, whose crème brûlée becomes the talk of the town.

			As Aabir navigates the challenges of culinary competition, he also contends with his mother's relentless matchmaking efforts, his monosyllabic sister Aatreyee, and the ghostly presence of his grandmother, Thakuma, who watches over the family from her perch atop a coconut tree. Amidst this familial chaos, Aabir finds himself drawn to Kimaya, leading to a series of humorous and heartfelt events that explore love, tradition, and self-discovery.

			Sen's narrative is rich with cultural nuances, blending humor and emotion seamlessly. The story not only offers a glimpse into Bengali traditions and family dynamics but also celebrates the universal themes of love and personal growth. With its engaging characters and mouthwatering descriptions of food, Crème Brûlée is a treat for both the heart and the palate.$$,
  buying_link = 'https://www.amazon.in/Cr%C3%A8me-Br%C3%BBl%C3%A9e-Novel-Ramona-Sen/dp/8129139774'
WHERE title = 'Crème Brûlée';

UPDATE books SET 
  summary = $$The Golden Circle by Christopher S. Dodd is a sweeping fantasy adventure that follows Bria, a seemingly ordinary girl from the quiet village of Vordona. Her life takes a dramatic turn when she's kidnapped, propelling her into the mystical Sharkain World and towards the enigmatic Forbidden Realm—a place teeming with magic and formidable beings.

			As Bria delves deeper into this unfamiliar world, she uncovers unsettling truths about her past. A revelation from the Queen shatters her understanding of her identity, revealing that her entire life has been built on secrets. Confronted with newfound responsibilities and the weight of destiny, Bria must make choices that demand immense courage and sacrifice.

			Dodd's narrative is rich with themes of self-discovery, betrayal, and the complexities of fate. Written with the imaginative flair of a young author, the story immerses readers in a world where every decision carries profound consequences. Bria's journey is not just a physical quest through magical realms, but also an emotional voyage towards understanding herself and her place in a world fraught with danger and deception.$$,
  buying_link = 'https://www.amazon.in/Golden-Circle-Dark-World-Trilogy/dp/1452092303'
WHERE title = 'The Golden Circle';

UPDATE books SET 
  summary = $$The Orange Hangover by Rahul Saini is a witty and heartfelt tale that captures the turbulence of young adulthood with humor and sincerity. At its center is Rishabh, a 25-year-old architect whose once-glamorous life in Gurgaon—complete with a good job, a loving girlfriend, and a vibrant social circle—comes crashing down. After a bout of dengue and a painful breakup, he finds himself back in his small hometown, surrounded by nosy neighbors, judgmental relatives, and a life that feels utterly foreign.

			As Rishabh struggles to adjust, he befriends Natasha, a perceptive journalist who introduces him to the concept of “The Orange Hangover”—that disorienting state where the heart and mind pull in opposite directions. With her support, he begins to rebuild his life: taking in a stray puppy he affectionately names “Gabru Chhota Kutta Jawan,” teaching underprivileged children, and confronting a shocking murder accusation that turns his world upside down.

			Saini’s storytelling is breezy yet layered, blending comedy, mystery, and emotional depth. The novel explores themes of identity, purpose, and resilience, reminding readers that sometimes, losing everything is the first step toward finding what truly matters. It’s a light, engaging read that resonates with anyone navigating the messy transition from youthful dreams to adult realities.$$,
  buying_link = 'https://www.amazon.in/Orange-Hangover-Rahul-Saini/dp/818495302X'
WHERE title = 'The Orange Hangover';

UPDATE books SET 
  summary = $$The Girl with the Dragon Tattoo by Stieg Larsson is a gripping thriller that plunges readers into a world of dark secrets, complex characters, and relentless pursuit of truth. The story centers on Mikael Blomkvist, a seasoned investigative journalist, and Lisbeth Salander, a brilliant but troubled hacker with a mysterious past. When Blomkvist is hired by a wealthy industrialist, Henrik Vanger, to solve the decades-old disappearance of his niece Harriet, he teams up with Lisbeth to uncover the truth.

			As they dig deeper, they unravel layers of corruption, violence, and family secrets lurking beneath the surface of the seemingly respectable Vanger dynasty. Lisbeth’s unconventional skills and fierce independence contrast sharply with Blomkvist’s dogged determination, making them a formidable duo against powerful enemies.

			Larsson masterfully weaves themes of abuse, justice, and the struggle against oppression throughout the narrative. The novel is not just a mystery but also an exploration of trauma, resilience, and redemption. With its complex characters and taut plotting, The Girl with the Dragon Tattoo captivates readers, drawing them into a dark, suspenseful world where the truth is both dangerous and necessary. It’s a story about the power of courage and intellect to challenge injustice, no matter the cost.$$,
  buying_link = 'https://www.amazon.in/Girl-Dragon-Tattoo-Reissue-genre-defining/dp/1529432391/ref=tmm_pap_swatch_0'
WHERE title = 'The Girl with the Dragon Tattoo';

UPDATE books SET 
  summary = $$Tracking Purnima by Usha Kathir is a gripping mystery that follows 24-year-old Aditi Sridhar, an aspiring journalist in Bangalore. Eager to make her mark, Aditi embarks on her first major feature article, aiming to uncover the whereabouts of Purnima, a celebrated singer and actress from the 1960s who has mysteriously vanished from public memory.

			As Aditi delves deeper into Purnima's past, she encounters unexpected challenges. An anonymous warning urges her to abandon the investigation, but her determination only intensifies. Enlisting the help of her friend Reshmi, a talented photographer, Aditi navigates a web of secrets, encountering increasingly bold and violent opposition.

			Kathir crafts a narrative that intertwines the past and present, exploring themes of ambition, resilience, and the pursuit of truth. Aditi's journey is not just a professional quest but also a personal awakening, as she confronts the complexities of fame, identity, and the lengths to which individuals will go to protect their secrets.

With its compelling characters and suspenseful plot, Tracking Purnima offers readers a thought-provoking exploration of the shadows that often lurk behind the spotlight. It's a testament to the power of perseverance and the enduring quest for justice.$$,
  buying_link = 'https://www.amazon.in/Tracking-Purnima-Usha-Kathir/dp/8184956355'
WHERE title = 'Tracking Purnima';

UPDATE books SET 
  summary = $$The Mirror of Fire and Dreaming by Chitra Banerjee Divakaruni is a mesmerizing continuation of her fantasy series, The Brotherhood of the Conch. In this second installment, we follow young Anand, a boy who once lived an ordinary life in modern-day Kolkata until he was chosen to guard a powerful magical conch and become part of a secret brotherhood.

			When Abhaydatta, Anand’s mentor, disappears mysteriously, Anand and his friend Nisha are thrust into a dangerous mission. Their search leads them into an ancient world—one filled with forgotten kingdoms, mystics, and secrets that challenge the very core of who they are. The journey is both physical and spiritual, testing Anand’s courage, loyalty, and sense of purpose.

			At the heart of the story is a magical mirror that doesn’t just show reflections, but reveals hidden truths and forgotten memories. Through it, Anand begins to uncover not just the fate of his teacher, but the depths of his own strength.

Chitra Banerjee Divakaruni crafts a vivid, emotionally rich tale full of Indian mythology, mystery, and adventure. At its core, it’s a story about finding one's path, even when that path leads through fire and dreams—and how the choices we make shape the people we become.$$,
  buying_link = 'https://www.amazon.in/Mirror-Dreaming-Chitra-Banerjee-Divakaruni/dp/8186939342'
WHERE title = 'The Mirror of Fire and Dreaming';

UPDATE books SET 
  summary = $$The Alchemist by Paulo Coelho is a deeply inspiring tale about following one’s dreams and listening to the heart. It tells the story of Santiago, a young Andalusian shepherd who yearns for something more than a simple life tending sheep. After dreaming of a treasure hidden near the Egyptian pyramids, he decides to embark on a journey to find it—leaving behind everything familiar.

			Along the way, Santiago meets a series of mentors and guides, including a mysterious king, an Englishman studying alchemy, and finally, the Alchemist himself. Each character imparts wisdom, helping Santiago understand that his "Personal Legend"—his true purpose in life—is worth pursuing at any cost.
				
			The journey is filled with setbacks, dangers, love, and self-discovery. Santiago learns that the treasure he seeks may not always be what he imagined, and that the true riches of life often lie in the lessons we gather and the growth we undergo in pursuit of our dreams.

			Coelho’s writing is simple yet profound, filled with symbolism and spiritual insight. The Alchemist is ultimately about the courage to follow your heart, the power of dreams, and the magic of listening to the universe when it speaks in whispers. It's a story that stays with you.$$,
  buying_link = 'https://www.amazon.in/Alchemist-Paulo-Coelho/dp/8172234988'
WHERE title = 'The Alchemist';

UPDATE books SET 
  summary = $$Slither: Carnal Prose by Urmilla Deshpande is a bold and intimate collection of eighteen short stories that delve into the complexities of human desire, longing, and emotional vulnerability. Set against diverse backdrops—from lush jungles to domestic spaces—the narratives explore the intricate dance between physical intimacy and emotional connection.

			In the titular story, "Slither," Deshpande paints a vivid picture of a woman’s yearning for deep connection, juxtaposed with her partner's detached fascination with botany. The imagery of entwined snakes becomes a poignant metaphor for the intimacy she craves but cannot attain. This theme of unfulfilled desire and the search for meaning in relationships threads through the collection, offering readers a raw and unfiltered look into the human psyche.

			Deshpande's prose is both lyrical and unflinching, capturing moments of tenderness, obsession, and heartbreak. Her characters grapple with their inner demons, societal expectations, and the often-blurred lines between love and lust. Through these stories, she invites readers to confront their own perceptions of intimacy and the myriad ways it manifests in our lives.

			Slither: Carnal Prose is not just a collection of erotic tales; it's a profound exploration of the human condition, challenging readers to reflect on the depths of their own desires and the connections they seek.$$,
  buying_link = 'https://www.amazon.in/Slither-Carnal-Prose-Urmilla-Deshpande/dp/9380658842'
WHERE title = 'Slither: Carnal Prose';

UPDATE books SET 
  summary = $$The 3 Mistakes of My Life by Chetan Bhagat is a heartfelt and fast-paced story about friendship, ambition, and the choices that shape our lives. Set in early 2000s Ahmedabad, it follows three close friends—Govind, Ishaan, and Omi—each chasing their own version of success while dealing with the pressures of society, family, and fate.

			Govind, the narrator, is a practical-minded young man who dreams of building a thriving business. He partners with cricket-obsessed Ishaan and religious yet loyal Omi to open a sports shop. What starts off as a simple venture soon becomes entangled in bigger realities—earthquakes, communal riots, and deeply personal mistakes. Along the way, Govind falls for Ishaan’s younger sister, Vidya, a decision that threatens to break their friendship.

			The story touches on real social and political tensions in India, blending themes of religion, youth aspiration, and moral dilemmas. Bhagat portrays how even good intentions can lead to life-changing consequences and how love and loyalty are often tested in the most unexpected ways.

			Ultimately, the book is about growth, regret, and redemption. Through the three “mistakes” Govind makes, we’re reminded that life is messy, unpredictable—and that sometimes, forgiveness is the bravest thing we can offer ourselves and others.$$,
  buying_link = 'https://www.amazon.in/3-Mistakes-My-Life/dp/8129135515'
WHERE title = 'The 3 Mistakes Of My Life';

UPDATE books SET 
  summary = $$Five Point Someone by Chetan Bhagat is a witty, emotional, and honest look at college life through the eyes of three friends—Hari, Ryan, and Alok—who struggle to survive the intense pressure of the Indian Institute of Technology (IIT). The title refers to their dismal grade point average: five-point-something on a ten-point scale, which brands them as underachievers in a system obsessed with academic excellence.

			The novel isn’t just about poor grades; it’s about rebellion, friendship, and trying to find your identity in a place that values scores more than creativity or passion. Ryan is the bold, idea-driven leader who questions the rigid system; Alok is the anxious, family-burdened one, always torn between responsibility and dreams; and Hari, the narrator, is stuck in between—confused, in love with a professor’s daughter, and unsure about what the future holds.

			Bhagat captures the pressure-cooker environment of IIT with humor and heart, shedding light on how academic systems can stifle innovation and individuality. But more than that, it’s a story of friendship—the kind that saves you from yourself.

			Five Point Someone is a reminder that what you score in life isn’t always what defines you. Sometimes, the biggest lessons are learned outside the classroom.$$,
  buying_link = 'https://www.amazon.in/FIVE-POINT-SOMEONE-Chetan-Bhagat/dp/8129135493'
WHERE title = 'Five Point Someone';

UPDATE books SET 
  summary = $$Rich Dad Poor Dad by Robert T. Kiyosaki is more than just a personal finance book—it's a wake-up call about how we think about money, work, and wealth. Through the lens of Kiyosaki's own life, the book contrasts two father figures: his biological father (the “Poor Dad”), who followed the traditional route of education and job security, and his best friend’s father (the “Rich Dad”), a self-made entrepreneur who taught him how money really works.

			The Poor Dad, despite being well-educated and hardworking, struggles financially because he believes in working for money. The Rich Dad, on the other hand, emphasizes making money work for you—through investing, entrepreneurship, and understanding assets versus liabilities.

			Kiyosaki argues that formal education teaches us to be good employees, but not how to manage or grow money. He encourages readers to shift their mindset: instead of fearing risks, understand them; instead of working endlessly for a paycheck, build systems that generate income.

			The book’s simple language, relatable anecdotes, and clear principles make it approachable even for beginners in finance. At its core, Rich Dad Poor Dad is about financial independence and choosing to be educated about money, not just academically successful. It’s about freedom—and the responsibility that comes with it.$$,
  buying_link = 'https://www.amazon.in/Rich-Dad-Poor-Middle-Updates/dp/1612680194'
WHERE title = 'Rich Dad Poor Dad';

UPDATE books SET 
	summary = $$The Greatest Salesman in the World by Og Mandino is not just a book about sales—it’s a gentle, inspiring guide to living a meaningful and purpose-driven life. Told through the story of Hafid, a humble camel boy in ancient times who dreams of becoming a successful salesman, the book weaves timeless wisdom into a simple but powerful narrative.

			Hafid’s journey is shaped by ten ancient scrolls, each containing a principle for personal growth and inner mastery. These scrolls don’t talk about sales techniques or strategies in the modern sense. Instead, they offer profound life lessons on persistence, love, self-discipline, purpose, and the power of good habits. Each scroll encourages the reader to build strength of character and lead with the heart, not just the head.

			Mandino’s storytelling feels deeply human and uplifting, reminding us that success is not about quick wins or clever tricks, but about living each day with intention and integrity. Whether you’re in business, struggling with self-doubt, or simply trying to be better than you were yesterday, the book speaks to the soul.

			At its core, The Greatest Salesman in the World is about believing in yourself, never giving up, and living in a way that inspires others by example.$$,
	buying_link = 'https://www.amazon.in/Greatest-Salesman-World-Og-Mandino/dp/055327757X'
WHERE title = 'The Greatest Salesman In The World';

UPDATE books SET 
	summary = $$Wish I Could Tell You by Durjoy Datta is a poignant and emotionally layered story about love, loss, and finding connection in the most unexpected places. Set against the world of an NGO that connects donors with those in need, the novel introduces us to Anusha and Ananth—two very different people with very different views on love and life.

			  Anusha believes in the goodness of people and the emotional side of giving, while Ananth is practical, skeptical, and emotionally guarded. Their lives intersect when they both start working for the NGO, and despite their differences, a subtle bond begins to form. But just when things seem to fall into place, an unforeseen twist shatters everything, leaving behind heartbreak, confusion, and a trail of unanswered questions.

			  Told through alternating perspectives, Datta explores how technology, social media, and real human emotions often collide. The novel beautifully captures the vulnerability of opening up to someone, the courage it takes to love again, and how sometimes the most meaningful connections are the ones we never expected.

			  At its heart, Wish I Could Tell You is about the things we leave unsaid, and how even in silence, love can grow, heal, and transform. It's tender, thought-provoking, and deeply human.$$,
	buying_link = 'https://www.amazon.in/Wish-I-Could-Tell-You/dp/0143448331'
WHERE title='Wish I Could Tell You';