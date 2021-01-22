-- DROP TABLE public.contacs;

CREATE TABLE  "public"."contacts" (
	 	id SERIAL PRIMARY KEY NOT NULL,
  		name VARCHAR(100) NOT NULL,
  		email VARCHAR(255) UNIQUE NOT NULL,
  		city VARCHAR (255) NOT NULL,
  		country VARCHAR (100) NOT NULL,
  		phone VARCHAR(100) NOT NULL,
  		avatar VARCHAR(100) NULL
);


INSERT INTO "public"."contacts" ("name", "email", "city" , "country" , "phone" , "avatar")
VALUES ('Leanne Graham', 'sincere@april.biz', 'Kulas Light', 'Gwenborough', '222 666 888', null);

INSERT INTO "public"."contacts" ("name", "email", "city" , "country" , "phone" , "avatar")
VALUES ('Ervin Howell', 'ervin@melissa.tv', 'Victor Plains', 'Wisokyburgh', '365 879 653', null);

INSERT INTO "public"."contacts" ("name", "email", "city" , "country", "phone" , "avatar")
VALUES ('Clementine Bauch', 'clementine@yesenia.net', 'Douglas Extension', 'McKenziehaven', '569 888 789', null);

INSERT INTO "public"."contacts" ("name", "email", "city" , "country" , "phone" , "avatar")
VALUES ('Patricia Lebsack', 'patricia@kory.org', 'Hoeger Mall' , 'South Elvis', '999 888 556', null);

INSERT INTO "public"."contacts" ("name", "email", "city" , "country" , "phone" , "avatar")
VALUES ('Chelsey Dietrich', 'chelsey@annie.ca', 'Skiles Walks', 'Roscoeview', '999 888 556', null);