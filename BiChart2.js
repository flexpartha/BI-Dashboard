//Page Load Function
$(document).ready(function () {
    $('#radioChk1').hide();
    $('#NxtBtn').hide();
    $('.Bimodulecls').hide();

    $('#menuBtn5').hide();
    $('#menuBtn2').hide();
    $('#menuBtn3').hide();
    $('#menuBtn4').hide();
    $('#menuBtn1').hide();
    $('#4rdPrevBtn').hide();
    $('#3rdPrevBtn').hide();
    $('#2ndPrevBtn').hide();
    $('#1stPrevBtn').hide();
    $('#1stNxtBtn').hide();
    $("#radio").hide();
    // $('#totaljobcount').hide();
    // $('.jobcount').hide();
    //$('#year').hide();

});

//Exit function from where you can exit from application
function closeWindow(){
    /*if (confirm("close Window...?")){
        close();
    }*/
    window.close();
}

function ExistFun(){
    $('#PrevBtn').hide();
     $('#NxtBtn').hide();
    $('#RespdivId').show();
    $('.Bimodulecls').hide();
    // $('#jobcount').hide();
    // $('#totaljobcount').hide();
    //  $('#year').hide();
    $('#radioChk1').hide();
    $('#menuBtn1').hide();
    $('#years').hide();

    //container
    $('#chartContainer').hide();


}


//Every Type of Chart function Like Bar,Pie and Line
function showChart(){

   var type =  $("input[name=choice]:checked").val(); 
   var next = parseFloat($("#next").val());
   if(isNaN(next)){next=0;}else{next=next;}  
   var page = $("#page_name").val();

    switch(page)
    {


        case 'jobcount':
            callQuery(queryData[next],type,next,'y');  
        break;

        case 'invoice':
             callQuery(queryDataInvdt[next],type,next,'inv');           
        break;

        case 'employee':
        callQuery(queryEmployee[next],type,next,'tot'); 
        break;
        case 'kpiData':
            callQuery(queryKpiData[next],type,next,'Y'); 
        break;
    }
       

    
}

// Every Icon click function
function loadData(page){

    $('#radioChk1').show();
    $('#NxtBtn').show();
    $('.Bimodulecls').show();
    $('#RespdivId').hide();
    $('#menuBtn1').show();

    $('#chartImgId').hide();
    $('#chartContainer').show();    
    $("#page_name").val(page);
    
  
    var type =  $("input[name=choice]:checked").val();
    // $('#totaljobcount').show();
    // $('.jobcount').show();
    //  $('#jobcount').show();

    var next = parseFloat($("#next").val());
    $("#page_name").val(page);
    
    heading;
    $('#years').show();
    switch(page)
    {


        case 'jobcount':
            callQuery(queryData[0],type,0,'y'); 
        break;

        case 'invoice':
            callQuery(queryDataInvdt[0],type,0,'inv'); 
        break;
        case 'employee':
            callQuery(queryEmployee[0],type,0,'tot'); 
        break;
        case 'kpiData':
            callQuery(queryKpiData[0],type,0,'Y'); 
        break;
    }
        
    
           
}

//Next Previous Function

function loadAllData(action){     
    var len = queryData.length-1;
    var type =  $("input[name=choice]:checked").val();
  
    $('#PrevBtn').hide();
    $('#NxtBtn').show();
    $('#radioChk1').show();
    var next = parseFloat($("#next").val());
    var page = $("#page_name").val();
    //alert(page);
    if(isNaN(next))

        {
            next=0;


        }

    else{
        next=next;
    }
    


    switch(action){

        case 'nextbtn':
            next++;    
        break;

        case 'previous': 
             next--;
        break;

    }

    switch(page)
    {


        case 'jobcount':
            callQuery(queryData[next],type,next,'y');
        break;

        case 'invoice':
             callQuery(queryDataInvdt[next],type,next,'inv');            
        break;
        case 'employee':
             callQuery(queryEmployee[next],type,next,'tot');            
        break;
        case 'kpiData':
            callQuery(queryKpiData[next],type,next,'Y'); 
        break;
    }

    

    $("#next").val(next);
    if(next > 0){ 
        $('#PrevBtn').show();
    }
    if(next == len){ 
        $('#NxtBtn').hide();
    }


    
}



// Chart Function
function callQuery(query,type,next,label){
    

    var url = encodeURI(api + query);
    $.ajax({
        type: "GET",
        url: url,
        dataType: "text",
        success: function (data) {
            processData(data,type,next,label);
            //alert(data);
            console.log(data);

        }
    });



    function processData(data,type,next,tnt) {
        //alert(label);
        var allLinesArray = JSON.parse(data);
        var jobcountlenght;

        jobcountlenght = allLinesArray.length;
        // document.getElementById('jobcount').innerHTML=jobcountlenght;
        if (allLinesArray.length > 0) {
            var dataPoints = [];
            
            
            //alert(heading);
            for (var i = 0; i <= allLinesArray.length - 1; i++) {
                /*var rowData = allLinesArray[i].split(',');*/
                /* if(allLinesArray && allLinesArray.length > 1)*/
                if(tnt=="y"){
                    //dataPoints.push({ label: allLinesArray[i].label, y: parseInt(allLinesArray[i].y)});
                    //alert(next);
                    switch(next){

                        case 0:
                            dataPoints.push({ label: allLinesArray[i].label, y: parseInt(allLinesArray[i].y)});
                            heading ="JobCount Data for Last 7 Days"+"   "+ allLinesArray[i].yr ;
                        break;

                        case 1:
                            dataPoints.push({ label: allLinesArray[i].label, y: parseInt(allLinesArray[i].y)});
                            heading =".Job Count data for current Year-"+"   "+ allLinesArray[i].yr ;
                        break;

                        case 2:
                            dataPoints.push({ label: allLinesArray[i].label, y: parseInt(allLinesArray[i].y)});
                            heading ="Job Count data for last Year-"+"   "+ allLinesArray[i].yr ;
                        break;
                        case 3:
                            dataPoints.push({ label: allLinesArray[i].label, y: parseInt(allLinesArray[i].y)});
                            heading ="Job Count data for two Years ago -"+"   "+ allLinesArray[i].yr ;
                        break;

                        case 4:
                            dataPoints.push({ label: allLinesArray[i].month, y: parseInt(allLinesArray[i].y)});
                            heading ="Job Count data for - last 4 weeks";
                        break;
                        case 5:
                            dataPoints.push({ label: allLinesArray[i].month, y: parseInt(allLinesArray[i].y)});
                            heading ="Job Count data for - last 4 months";
                        break;

                    }

                }

                 if(tnt=="inv"){

                    switch(next){

                        case 0:
                        dataPoints.push({ label: allLinesArray[i].label, y: parseInt(allLinesArray[i].y)});
                        heading ="Invoices Data for the Year of"+"   "+ allLinesArray[i].yr ;
                        break;
                        case 1:
                        dataPoints.push({ label: allLinesArray[i].label, y: parseInt(allLinesArray[i].y)});
                        heading ="Invoices Data for the Year of"+"   "+ allLinesArray[i].yr ;
                        break;
                        case 2:
                        dataPoints.push({ label: allLinesArray[i].label, y: parseInt(allLinesArray[i].y)});
                        heading ="Invoices Data for the Year of"+"   "+ allLinesArray[i].yr ;
                        break;
                        case 3:
                        dataPoints.push({ label: allLinesArray[i].label, y: parseInt(allLinesArray[i].y)});
                        heading ="Invoices Data for the Year of"+"   "+ allLinesArray[i].yr ;
                        break;
                        case 4:
                        dataPoints.push({ label: allLinesArray[i].label, y: parseInt(allLinesArray[i].y)});
                        heading ="Invoices Data for the Year of 2016";
                        break;


                    }
                    
                }

                if(tnt=="tot")
                {
                    heading ="Employee Data for the Year of"+"   "+ allLinesArray[i].yr ;
                    switch(next){

                        case 0:
                            dataPoints.push({ label: allLinesArray[i].employeeid, y: parseInt(allLinesArray[i].tot)});
                        break;

                        case 1:
                            dataPoints.push({ label: allLinesArray[i].employeeid, y: parseInt(allLinesArray[i].tot)});
                        break;

                        case 2:
                            dataPoints.push({ label: allLinesArray[i].Wk, y: parseInt(allLinesArray[i].y)});
                            heading ="Employee Data for the Year of 2016";
                        break;

                        case 3:
                            dataPoints.push({ label: allLinesArray[i].employeeid, y: parseInt(allLinesArray[i].y)});
                            heading ="Employee Data for the Year of 2016";
                        break;
                        

                    }
                    
                }

                if(tnt=="Y")
                {
                    heading ="KPI Data for the Year of"+"   "+ allLinesArray[i].yr ;
                    switch(next){

                        case 0:
                            dataPoints.push({ label: allLinesArray[i].month, y: parseInt(allLinesArray[i].y)});
                            heading ="KPI Data for the Year of 2016";
                        break;

                        case 1:
                            dataPoints.push({ label: allLinesArray[i].dept, y: parseInt(allLinesArray[i].y)});
                            heading ="KPI Data for the Year of 2016";
                        break;

                        case 2:
                            dataPoints.push({ label: allLinesArray[i].beginmon, y: parseInt(allLinesArray[i].y)});
                            heading ="KPI Data for the Year of 2016";
                        break;

                        case 3:
                            dataPoints.push({ label: allLinesArray[i].statuscode, y: parseInt(allLinesArray[i].y)});
                            heading ="KPI Data for the Year of 2016";
                        break;
                        case 4:

                            dataPoints.push({label: allLinesArray[i].dept, y: parseInt(allLinesArray[i].totalinvoices)});
                            heading ="KPI Data for the Year of 2016";
                        break;

                    }
                    
                }

                /*if(next>2)
                {
                	heading ="Invoices Data for the Year of"+"   "+ allLinesArray[i].yr ;
                }
                else
                {
                	heading ="Job Counts Data for the Year of"+"   "+ allLinesArray[i].yr ;
                }*/

                

                document.getElementById('years').innerHTML=heading;
                console.log(allLinesArray[i]);

            }
            chart.options.data[0].dataPoints = dataPoints;
            chart.render();
        }
    }

    //alert(heading);

    switch(type)
    {

        case 'bar':

        var chart = new CanvasJS.Chart("chartContainer", {
        theme: "theme2",
        //height:400,
        // backgroundColor: "#F5DEB3",
        title: {
             /*text:heading,
             verticalAlign: "bottom",
        	 horizontalAlign: "left"*/
           
        },

        /*toolTip:{
         enabled: false,
         },*/
        dataPointMaxWidth:100,
        animationEnabled: true,
        axisX:{
            labelFontWeight: "bold",
            labelFontColor: "red",
            labelAutoFit: true
        },
        data: [
            {
                type: "column",
                indexLabel: "{y}",
                indexLabelFontSize:16,
                indexLabelFontColor: "#000000",
                indexLabelFontWeight: "bold",
                indexLabelPlacement: "auto",
                indexLabelLineThickness: 15,
                indexLabelOrientation: "horizontal",
                dataPoints: []
            }
        ]
    });
        break;

        case 'pie':

        var chart = new CanvasJS.Chart("chartContainer", {
        theme: "theme2",
        //height:400,
        // backgroundColor: "#F5DEB3",
        title: {
              /*text:heading,
              verticalAlign: "bottom",
        	  horizontalAlign: "left"*/
        
        },

        /*toolTip:{
         enabled: false,
         },*/
        dataPointMaxWidth:100,
        animationEnabled: true,
        axisX:{
            labelFontWeight: "bold",
            labelFontColor: "red",
            labelAutoFit: true
        },
        data: [
            {
                type: "pie",
                indexLabel: "{label},{y}",
                indexLabelFontSize:16,
                indexLabelFontColor: "#000000",
                indexLabelFontWeight: "bold",
                indexLabelPlacement: "auto",
                indexLabelLineThickness: 15,
                indexLabelOrientation: "horizontal",
                dataPoints: []
            }
        ]
    });

        break;

        case 'line':

        var chart = new CanvasJS.Chart("chartContainer", {
        theme: "theme2",
        //height:400,
        // backgroundColor: "#F5DEB3",
        title: {
             /*text:heading,
              verticalAlign: "bottom",
        	 horizontalAlign: "left"*/
        },

        /*toolTip:{
         enabled: false,
         },*/
        dataPointMaxWidth:100,
        animationEnabled: true,
        axisX:{
            labelFontWeight: "bold",
            labelFontColor: "red",
            labelAutoFit: true
        },
        data: [
            {
                type: "line",
                indexLabel: "{y}",
                indexLabelFontSize:16,
                indexLabelFontColor: "#000000",
                indexLabelFontWeight: "bold",
                indexLabelPlacement: "auto",
                indexLabelLineThickness: 15,
                indexLabelOrientation: "horizontal",
                dataPoints: []
            }
        ]
    });
        break;
    

 }


}