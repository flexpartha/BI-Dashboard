// ALL JOB COUNTS QUERY

var Qb_Job_11 ="select cmonth(datecomp) as day, ttod(datecomp) as dy , LEFT(cdow(datecomp),3) as label, count(1) as y from servcard where  between(datecomp, (date() - 69), (date() - 62)) group by day, dy, label order by day";

var Qb_Job_12 = "select 'Yearly' as yy, year(datecomp) as yr, month(datecomp) as mo, substr(cmonth(datecomp),1,3) as label, count(1) as y from servcard where year(datecomp) = year(date())   group by yr, mo, label order by yr, mo";

var Qb_Job_13 = "select  year(datecomp) as yr, month(datecomp) as mo, substr(cmonth(datecomp),1,3) as label, count(1) as y from servcard where year(datecomp) = year(date()) -1  group by yr, mo, label order by yr, mo";


var Qb_Job_14 = "select  year(datecomp) as yr, month(datecomp) as mo, substr(cmonth(datecomp),1,3) as label, count(1) as y from servcard where year(datecomp) = year(date()) - 2 group by yr, mo, label order by yr, mo";

var Qb_Job_15 = "select  week(datecomp) as wk, count(1) as y from servcard where between (datecomp, (date()-90),(date()- 60)) group by wk order by wk";

var Qb_Job_16 = "select month(datecomp) as beginmon, Month(datecomp) as Month,  count(1) as y from servcard where between (datecomp,(date()-200), (date()- 92)) group by month order by beginmon";

//ALL INVOICE DATA QUERY


var Qb_Inv_21 = "select dow(invdate) as day, ttod(invdate) as dy , cmonth(invdate) as label, count(1) as y from invoices where  between(invdate, (date() - 46), (date() - 40)) group by day, dy, label order by day";
var Qb_Inv_22 = "select  year(invdate) as yr, month(invdate) as mo, substr(cmonth(invdate),1,3) as label, count(1) as y from invoices where year(invdate) = year(date() - 1) group by yr, mo, label order by yr, mo";
var Qb_Inv_23 = "select  year(invdate) as yr, month(invdate) as mo, substr(cmonth(invdate),1,3) as label, count(1) as y from  invoices where year(invdate) = year(date() - 2) group by yr, mo, label order by yr, mo";
var Qb_inv_24 = "select min(invdate) as begindate, week(invdate) as wk, count(1) as y from invoices where invoices.invdate between (date()-28) and date() group by wk order by begindate";
var Qb_inv_25 = "select month(invdate) as beginmon, Month(invdate) as Month, count(1) as y from invoices where invoices.invdate between (date()-118) and date() group by month order by beginmon";


// ALL EMPLOYEE QUERY

var Qb_Emp_31 = "select year(date) as yr, cmonth(date) as label, employeeid, sum(total) as tot from time where year(date) = year(date()) group by label, yr,employeeid";
var Qb_Emp_32 = "select year(date) as yr, cmonth(date) as label, employeeid, sum(hours) as tot from time where year(date) = year(date()) group by yr,label,employeeid";
var Qb_Emp_33 = "select min(date) as begindate,week(date) as wk,count(1) as y, employeeid from time where time.date between ( date() - 28) and date() group by wk, employeeid order by begindate";
var Qb_Emp_34 = "select month(date) as beginmon, month(date) as month, count(1) as y, employeeid from time where time.date between ( date()-118) and date() group by month,employeeid order by beginmon";


//ALL KPI DATA QUERY

var Qb_KPI_41 = "select min(datecomp) as begindate, week(datecomp) as wk, dept as dept, count(1) as y from servcard where servcard.datecomp between (date()-28) and date() group by wk, dept order by begindate";
var Qb_KPI_42 = "select month(datecomp) as beginmon, Month(datecomp) as Month, dept as dept, count(1) as y from servcard where servcard.date between (date()-118) and date() group by month, dept order by beginmon";
var Qb_KPI_43 ="select min(datecomp) as begindate, week(datecomp) as wk, statuscode as status, count(1) as y from servcard where servcard.datecomp between (date()-28) and date() group by wk, status order by begindate";
var Qb_KPI_44 = "select month(datecomp) as beginmon, Month(datecomp) as Month,statuscode, count(1) as y from servcard where servcard.datecomp between (date()-118) and date() group by month, statuscode order by beginmon";

var Qb_KPI_45 = "select dept, count(1) as jobcount, sum(total) as totalinvoices from invoices where invdate > gomonth(date(), -4) group by dept order by totalinvoices desc";


var heading;


var api = "http://localhost:5001/api/sql?q=";


// ALL JOB COUNTS ARRAY
var queryData = [Qb_Job_11, Qb_Job_12, Qb_Job_13, Qb_Job_14, Qb_Job_15,Qb_Job_16];


//ALL INVOICE ARRAY
var queryDataInvdt=[Qb_Inv_21,Qb_Inv_22,Qb_Inv_23,Qb_inv_24,Qb_inv_25];


//ALL EMPLOYEE ARRAY
var queryEmployee=[Qb_Emp_31,Qb_Emp_32,Qb_Emp_33,Qb_Emp_34];


//ALL KPI DATA ARRAY
var queryKpiData=[Qb_KPI_41,Qb_KPI_42,Qb_KPI_43,Qb_KPI_44,Qb_KPI_45];



//2016 job count data

//var Qb22= "select  year(date) as yr, month(date) as mo, substr(cmonth(date),1,3) as label, count(1) as y from servcard where year(date) = year(date() - 1) group by yr, mo, label order by yr, mo";

//2015 job count

 //var Qb21 = "select  year(date) as yr, month(date) as mo, substr(cmonth(date),1,3) as label, count(1) as y from servcard where year(date) = year(date()) - 1 group by yr, mo, label order by yr, mo";
   

 //2014 job count
 
 //var Qb20 = "select  year(date) as yr, month(date) as mo, substr(cmonth(date),1,3) as label, count(1) as y from servcard where year(date) = year(date()) - 2 group by yr, mo, label order by yr, mo";
 

 //2016 invoice Data

  //var Qb19 = "select  year(invdate) as yr, month(invdate) as mo, substr(cmonth(invdate),1,3) as label, count(1) as y from invoices where year(invdate) = year(date()) group by yr, mo, label order by yr, mo";

 ///2015 invoice Data

 //var Qb18 = "select  year(invdate) as yr, month(invdate) as mo, substr(cmonth(invdate),1,3) as label, count(1) as y from invoices where year(invdate) = year(date())-1 group by yr, mo, label order by yr, mo";

    
 //2014 Invooice Data

 //var Qb17 = "select  year(invdate) as yr, month(invdate) as mo, substr(cmonth(invdate),1,3) as label, count(1) as y from invoices where year(invdate) = year(date())-2 group by yr, mo, label order by yr, mo";
