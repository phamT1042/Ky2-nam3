use [master]
go
create database b1
go
use b1
go

create table account (
	username varchar(20) primary key,
	password varchar(20) not null,
	email varchar(50) not null
);
go

insert into [dbo].account values ('test', 'test', 'pvantien203@gmail.com')
go