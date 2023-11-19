drop database mytravel;
create database mytravel;

use mytravel;

drop table member;
create table member(
	mno int not null,
    mid varchar(20) not null,
    mpw varchar(30) not null,
	mrole int not null,
    mname varchar(100) not null,
    mssnumber varchar(13) not null,
    memail varchar(100) not null,
    mphone varchar(13) not null,
    primary key(mno)
);


drop table planner;
create table planner(
	pno int not null,
    ptitle varchar(150) not null,
    pfrdate Date not null, 
    plsdate Date not null,
    mno int not null,
    
    primary key(pno)
);

drop table schedular;
create table schedular(
	sno int not null,
    pno int not null,
    mno int not null,
    saddress varchar(100) not null,
    splace varchar(32) not null,
    slon varchar(100) not null,
    slat varchar(100) not null,
    sdate int not null,
    sarridate datetime not null,
    sstartdate datetime not null,
    sfile int,
    sprice int,
    ctno int not null,
    bkno int not null default -1,
    primary key(sno)
);

drop table country;
create table country(
	ctno int not null,
    cttype int not null default 0,
    ctspot varchar(255) not null,
);

drop table file;
create table file(
	fno int not null,
    forigin varchar(64) not null,
    finternal varchar(255) not null,
    fsize varchar(8) not null,
    primary key(fno)
);

drop table board;
create table board(
	bno int not null,
    btype int not null,
    mno int not null,
    btitle varchar(100) not null,
    bcontent text,
    blike int not null default 0,
    bview int not null default 0,
    bdate datetime not null,
    bprivate int not null default 0,
    primary key(bno)
);

drop table commend;
create table commend(
	cno int not null,
    bno int not null,
    ccommend text not null,
    cdate datetime not null,
    primary key(cno)
);


drop table book;
create table book(
	bkno int not null,
    bkprice int not null,
    bktitle varchar(100) not null,
    bkcontent text not null,
    bktype int not null,
    primary key(bkno)
);

