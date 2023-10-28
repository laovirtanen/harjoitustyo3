create database shoppinglist;

use shoppinglist;

create table item (
  id int primary key auto_increment,
  description varchar(255) not null,
  amount smallint unsigned not null
);


#luonti skripti testidatalle
INSERT INTO item (description, amount) VALUES ('Test item', 1);
INSERT INTO item (description, amount) VALUES ('Another item', 2);
INSERT INTO item (description, amount) VALUES ('Third item', 3);
