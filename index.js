var activityList = [
  {
   date : 12319273911231,
   tasks : [
    {
     name : "code commit",
     time : 1241241241241
    },
    {
     name : "code commit",
     time : 1241241241241
    }
   ]
  },
  {
   date : 12319273911231,
   tasks : [
   ]
  },
  {
   date : 12319273911231,
   tasks : [
    {
     name : "code commit",
     time : 1241241241241
    },
    {
     name : "code commit",
     time : 1241241241241
    },
    {
     name : "code commit",
     time : 1241241241241
    },
    {
     name : "code commit",
     time : 1241241241241
    }
   ]
  },
  {
   date : 12319273911231,
   tasks : [
    {
     name : "code commit",
     time : 1241241241241
    }
   ]
  },
  {
   date : 12319273911231,
   tasks : [
    {
     name : "code commit",
     time : 1241241241241
    }
   ]
  },
  {
   date : 12319273911231,
   tasks : [
    {
     name : "code commit",
     time : 1241241241241
    }
   ]
  },
  {
   date : 12319273911231,
   tasks : [
    {
     name : "code commit",
     time : 1241241241241
    }
   ]
  },
  {
   date : 12319273911231,
   tasks : [

   ]
  },
  {
   date : 12319273911231,
   tasks : [

   ]
  },
  {
   date : 12319273911231,
   tasks : [

   ]
  },
  {
   date : 12319273911231,
   tasks : [

   ]
  },
  {
   date : 12319273911231,
   tasks : [

   ]
  },
  {
   date : 12319273911231,
   tasks : [
    {
     name : "code commit",
     time : 1241241241241
    },
    {
     name : "code commit",
     time : 1241241241241
    },
    {
     name : "code commit",
     time : 1241241241241
    },
    {
     name : "code commit",
     time : 1241241241241
    }
   ]
  },
  {
   date : 12319273911231,
   tasks : [
    {
     name : "code commit",
     time : 1241241241241
    },
    {
     name : "code commit",
     time : 1241241241241
    },
    {
     name : "code commit",
     time : 1241241241241
    },
    {
     name : "code commit",
     time : 1241241241241
    }
   ]
  }  
 ];


$(document).ready(function () {
	console.log("document ready");
	getRedditData();
	buildStreakView(activityList);
	bindEvents();
});

function getRedditData() {
	$.getJSON("http://www.reddit.com/r/getmotivated/top.json", function (data, textStatus) { 
		console.log(data);

		var listItem = data.data.children[0].data;

		if (listItem.title.indexOf("[Image]") != -1) {
			$("body").append("<div><img src='" + listItem.url + "' /></div>");
		}		
		// $.each(data.data.children, function(index, value) {
		// 	console.log(value.data.title);
		// })
	} )
}

function bindEvents() {
	$(".streaksquare").click(function () { 
		var clickedElement = $(this);
		console.log(clickedElement);
		$("#info").html(clickedElement.data("number"));
	});
}

function buildStreakView(activityList) {
	var colorFrequency;
	var colwidth = 50;
	var rowheight = 25;
	$.each(activityList, function(index, day) {

		$("body").append("<div class='streaksquare' id='" + index + "' ></div>");
		// $("#" + index).css("background-color", colorFrequency);
		// $("#" + index).css("", colorFrequency);
		var newdiv = $("#" + index);
		newdiv.css("background-color", "rgba(50, 200, 50,  " + getOpacity(day.tasks.length) + ")" );
		newdiv.css("left", colwidth * Math.floor(index / 7) );
		newdiv.css("top", rowheight * (index % 7) );
		newdiv.css("width", colwidth);
		newdiv.css("height", rowheight);		
		newdiv.css("position", "absolute");		
		newdiv.css("margin-right", "5px");		
		newdiv.css("margin-top", "5px");		

		// $.data(newdiv, "number", day.tasks.length);
		newdiv.data("number",day.tasks.length);
		// console.log(newdiv.data);
	});	
}

function getOpacity(number) {
	number = Math.min(number, 5);
	return number / 5.0;
}


// {
//  activityList : [
//   {
//    date : 12319273911231,
//    tasks : [
//     {
//      name : "code commit",
//      time : 1241241241241
//     },
//     {
//      name : "code commit",
//      time : 1241241241241
//     },
//    ]
//   },
//   {
//    date : 12319273911231,
//    tasks : [
//     {
//      name : "code commit",
//      time : 1241241241241
//     },
//     {
//      name : "code commit",
//      time : 1241241241241
//     },
//    ]
//   },
//  ]
// }
