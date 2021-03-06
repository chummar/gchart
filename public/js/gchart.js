function div_1_chart() {    
    google.load('visualization', '1', {packages: ['corechart', 'bar']});
		//google.load('visualization', '1', {packages: ["corechart"]});
        google.setOnLoadCallback(drawChart);

        // this has to be a global function
        function drawChart() {
            // grab the CSV
            $.get("BOOKINGSVSCONSUMERNEW.csv", function(csvString) {
                // transform the CSV string into a 2-dimensional array
                var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});
                //var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});

                // this new DataTable object holds all the data
                var data = new google.visualization.arrayToDataTable(arrayData);

                // this view can select a subset of the data at a time
                // var view = new google.visualization.DataView(data);
                // view.setColumns([0,1]);

                // set chart options
                var options = {
                    title: 'Bookings vs Consumers',
                    colors: ['#7fcdbb', '#2b8cbe'],
                    legend: { position: 'top' },
                    'backgroundColor': {
                        'fill': '#F4F4F4',
                        'opacity': 100
                    },

                };


              //  var material = new google.charts.AreaChart(document.getElementById('chart_div'));
			   var material = new google.visualization.AreaChart(document.getElementById('chart_div'));
                material.draw(data, options);
				
				
            });

        }
 }

function div_2_chart()
{

    google.load('visualization', '1', {packages: ['corechart', 'bar']});
        google.setOnLoadCallback(drawChart);

        // this has to be a global function
        function drawChart() {
            // grab the CSV
            $.get("data/comment_cards.csv", function(csvString) {
                // transform the CSV string into a 2-dimensional array
                var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});
                //var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});

                // this new DataTable object holds all the data
                var data = new google.visualization.arrayToDataTable(arrayData);

                // this view can select a subset of the data at a time
                // var view = new google.visualization.DataView(data);
                // view.setColumns([0,1]);

                // set chart options
                var options = {
                    title: 'Comment Cards',
                    colors: ['#9575cd', '#33ac71'],
                    legend: { position: 'top' },
                    'backgroundColor': {
                        'fill': '#F4F4F4',
                        'opacity': 100
                    },

                };


               // var material = new google.charts.Bar(document.getElementById('chart_div1'));
               // material.draw(data, options);
				
				var chart = new google.visualization.ColumnChart(document.getElementById("chart_div1"));
      chart.draw(data, options);

            });

        }


}

function div_3_chart()
{
	   google.load("visualization", "1", {packages:["corechart", "calendar"]});
        google.setOnLoadCallback(drawChart);
        function drawChart() {
            // grab the CSV
            $.get("consumercountuiw.csv", function(csvString) {
                // transform the CSV string into a 2-dimensional array
                var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});

                // this new DataTable object holds all the data
                var data = new google.visualization.arrayToDataTable(arrayData);

                // this view can select a subset of the data at a time
                // var view = new google.visualization.DataView(data);
                // view.setColumns([0,1]);
                var options = {
                    title: 'Records with Consumer IDs',
                    hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
                    vAxis: {minValue: 0}
                };

                var chart = new google.visualization.AreaChart(document.getElementById('chart_div2'));
                chart.draw(data, options);
            });

        }
	
	}

function div_4_chart()
{

  google.load("visualization", "1", {packages:["corechart"]});
        google.setOnLoadCallback(drawChart);
        function drawChart() {
            // grab the CSV
            $.get("consumercountuiw.csv", function(csvString) {
                // transform the CSV string into a 2-dimensional array
                var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});

                // this new DataTable object holds all the data
                var data = new google.visualization.arrayToDataTable(arrayData);

                // this view can select a subset of the data at a time
                // var view = new google.visualization.DataView(data);
                // view.setColumns([0,1]);
                var options = {
                    title: 'Distinct count of consumer Ids in DGXREF',
                   hAxis: {title: 'Week # of the year',  titleTextStyle: {color: '#333'}},
                    //vAxis: {minValue: 0}
				    //vAxis: {title: 'Accumulated Rating'},
           seriesType: "bars",
    series: {1: {type: "line"}}
                };

                var chart = new google.visualization.ComboChart(document.getElementById('chart_div3'));
                chart.draw(data, options);
            });

        }


}
function calendar_div_1()
{
	  // google.load("visualization", "1.1", {packages:["calendar"]});
      google.setOnLoadCallback(drawChart1);

   function drawChart1() {
      // grab the CSV
            $.get("caldate.csv", function(csvString) {
                // transform the CSV string into a 2-dimensional array
                var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});

                // this new DataTable object holds all the data
                var dataTable = new google.visualization.arrayToDataTable(arrayData);
				
				var view = new google.visualization.DataView(dataTable);
// create a formatter to format the dates
var dateFormatter = new google.visualization.DateFormat({pattern: 'dd-MM-yy'});
view.setColumns([{
    type: 'date',
    label: 'Date',
    calc: function (dataTable, row) {
        var dateMatch = dataTable.getValue(row, 0).match(/(\d{2})-(\d{2})-(\d{2})/);
       // var timeMatch = dataTable.getValue(row, 1).match(/(\d{2}):(\d{2}):(\d{2})/);
        var year = 20 + dateMatch[3];
        var month = parseInt(dateMatch[2], 10) - 1; // subtract 1 to convert to javascript's zero-indexed months
        var day = parseInt(dateMatch[1], 10);
        //var hours = parseInt(timeMatch[1], 10);
       // var minutes = parseInt(timeMatch[2], 10);
        //var seconds = parseInt(timeMatch[3], 10);
       // var dateTime = new Date(year, month, day, hours, minutes, seconds);
		var date = new Date(year, month, day);
        return {v: date, f: dateFormatter.formatValue(date)};
    }
}, 1 /* ... rest of columns if necessary */]);
				
				
				
      
       var chart1 = new google.visualization.Calendar(document.getElementById('calendar_div1'));

       var options = {
         title: "Records processed by day",
         height: 175,
       };

       chart1.draw(view, options);
   });
   }
}	
	
function calendar_div_2()
{	
	
	    google.load("visualization", "1", {packages:["timeline"]});
      google.setOnLoadCallback(drawChart);


        function drawChart() {
      // grab the CSV
            $.get("timeline.csv", function(csvString) {
                // transform the CSV string into a 2-dimensional array
                var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});

                // this new DataTable object holds all the data
                var dataTable = new google.visualization.arrayToDataTable(arrayData);
				
				var view = new google.visualization.DataView(dataTable);
// create a formatter to format the dates
var dateFormatter = new google.visualization.DateFormat({pattern: 'HH-MM-SS'});
view.setColumns([
0,1,
{
    type: 'date',
    label: 'Date',
    calc: function (dataTable, row) {
		var yearTo = 0;
		var monthTo = 0;
		var dayTo = 0;
        var timeMatchTo = dataTable.getValue(row, 2).match(/(\d{2}):(\d{2}):(\d{2})/);
        var hoursTo = parseInt(timeMatchTo[1], 10);
        var minutesTo = parseInt(timeMatchTo[2], 10);
        var secondsTo = parseInt(timeMatchTo[3], 10);
		var dateTimeTo = new Date(yearTo, monthTo, dayTo, hoursTo, minutesTo, secondsTo); 
        return {v: dateTimeTo, f: dateFormatter.formatValue(dateTimeTo)};
    }
}, 
{
    type: 'date',
    label: 'Date',
    calc: function (dataTable, row) {
      var year = 0;
		var month = 0;
		var day = 0;
        var timeMatch = dataTable.getValue(row, 3).match(/(\d{2}):(\d{2}):(\d{2})/);
        var hours = parseInt(timeMatch[1], 10);
        var minutes = parseInt(timeMatch[2], 10);
        var seconds = parseInt(timeMatch[3], 10);
		var dateTime = new Date(year, month, day, hours, minutes, seconds); 
        return {v: dateTime, f: dateFormatter.formatValue(dateTime)};
    }
} 
 /* ... rest of columns if necessary */]);
 
   var chart10 = new google.visualization.Timeline(document.getElementById('timelines'));

       var options = {
         title: "Records processed by day",
         height: 600,
        // colors: ['#cbb69d', '#603913', '#c69c6e','#9575cd', '#33ac71'],
          colors: ['#67a9cf', '#a1d99b', '#fcc5c0','#fa9fb5', '#33ac71'],
       };
       
       chart10.draw(view, options); 

 
 });
      }
	
	
	}

function timelines()
	   {
      google.load("visualization", "1", {packages:["timeline"]});
      google.setOnLoadCallback(drawChart);


        function drawChart() {
      // grab the CSV
            $.get("timelinet.csv", function(csvString) {
                // transform the CSV string into a 2-dimensional array
                var arrayData = $.csv.toArrays(csvString, {onParseValue: $.csv.hooks.castToScalar});

                // this new DataTable object holds all the data
                var dataTable = new google.visualization.arrayToDataTable(arrayData);
				
				var view = new google.visualization.DataView(dataTable);
// create a formatter to format the dates
var dateFormatter = new google.visualization.DateFormat({pattern: 'dd/MM/yy'});
view.setColumns([
0,1,
{
    type: 'date',
    label: 'Date',
    calc: function (dataTable, row) {
        var dateMatch = dataTable.getValue(row, 2).match(/(\d{2})-(\d{2})-(\d{2})/);
       // var timeMatch = dataTable.getValue(row, 1).match(/(\d{2}):(\d{2}):(\d{2})/);
        var year = 20 + dateMatch[3];
        var month = parseInt(dateMatch[1], 10) - 1; // subtract 1 to convert to javascript's zero-indexed months
        var day = parseInt(dateMatch[2], 10);
        //var hours = parseInt(timeMatch[1], 10);
       // var minutes = parseInt(timeMatch[2], 10);
        //var seconds = parseInt(timeMatch[3], 10);
       // var dateTime = new Date(year, month, day, hours, minutes, seconds);
		var date = new Date(year, month, day);
        return {v: date, f: dateFormatter.formatValue(date)};
    }
}, 
{
    type: 'date',
    label: 'Date',
    calc: function (dataTable, row) {
        var dateMatch = dataTable.getValue(row, 3).match(/(\d{2})-(\d{2})-(\d{2})/);
       // var timeMatch = dataTable.getValue(row, 1).match(/(\d{2}):(\d{2}):(\d{2})/);
        var year = 20 + dateMatch[3];
        var month = parseInt(dateMatch[1], 10) - 1; // subtract 1 to convert to javascript's zero-indexed months
        var day = parseInt(dateMatch[2], 10);
        //var hours = parseInt(timeMatch[1], 10);
       // var minutes = parseInt(timeMatch[2], 10);
        //var seconds = parseInt(timeMatch[3], 10);
       // var dateTime = new Date(year, month, day, hours, minutes, seconds);
		var date = new Date(year, month, day);
        return {v: date, f: dateFormatter.formatValue(date)};
    }
}
 /* ... rest of columns if necessary */]);
 
   var chart10 = new google.visualization.Timeline(document.getElementById('timeline'));

       var options = {
         title: "QC-Item Timeline",
         height: 600,
        // colors: ['#cbb69d', '#603913', '#c69c6e','#9575cd', '#33ac71'],
         // colors: ['#67a9cf', '#a1d99b', '#fcc5c0','#fa9fb5', '#33ac71','#cbb69d],
       };
       
       chart10.draw(view, options); 

 
 });
      }
	  }
