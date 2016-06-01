This is an example autentification with PHP and Angular 2 (RC1). Tokens are generated through PHP and saved into MySQL database.
<br/>
Also this example has a DataTable Angular 2 plugin on All Rooms page.

The contents of <b>php</b> folder should be placed on PHP server root folder like htdocs (in XAMPP)
or www in Apache server. <br/>

To run Angular Front end part of application. Run <b>npm install</b> in angular folder and then run 
<b>npm start</b> from bash. <br/>

Also you will need to import Database from this SQL. Database name and configuration is placed in <b>php/config.php</b> file.<br/>

```sql
CREATE TABLE IF NOT EXISTS `rooms` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `roomname` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `tv` int(11) DEFAULT NULL,
  `beds` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- Data exporting was unselected.


-- Dumping structure for table users.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstname` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `lastname` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `username` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  `token` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
```
