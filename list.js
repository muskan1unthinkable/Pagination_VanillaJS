
var listobj=[
	{   rollno:"1",
		name:"Muskan",
		email:"Choudharymuskan@unthinkable.co"
	},
	{   rollno:"2",
		name:"Muskan",
		email:"Choudharymuskan@unthinkable.co"
	},
	{   rollno:"3",
	name:"Muskan",
	email:"Choudharymuskan@unthinkable.co"
},
{   rollno:"4",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
},
{   rollno:"5",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
},
{   rollno:"6",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
}
,{   rollno:"7",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
},
{   rollno:"8",
		name:"Muskan",
		email:"Choudharymuskan@unthinkable.co"
	},
	{   rollno:"9",
		name:"Muskan",
		email:"Choudharymuskan@unthinkable.co"
	},
	{   rollno:"10",
	name:"Muskan",
	email:"Choudharymuskan@unthinkable.co"
},
{   rollno:"11",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
},
{   rollno:"12",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
},
{   rollno:"13",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
}
,{   rollno:"14",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
},
{   rollno:"15",
		name:"Muskan",
		email:"Choudharymuskan@unthinkable.co"
	},
	{   rollno:"16",
		name:"Muskan",
		email:"Choudharymuskan@unthinkable.co"
	},
	{   rollno:"17",
	name:"Muskan",
	email:"Choudharymuskan@unthinkable.co"
},
{   rollno:"18",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
},
{   rollno:"19",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
},
{   rollno:"20",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
}
,{   rollno:"21",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
},
{   rollno:"22",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
}
,{   rollno:"23",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
},{   rollno:"24",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
}
,{   rollno:"25",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
},{   rollno:"26",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
}
,{   rollno:"27",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
},{   rollno:"28",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
}
,{   rollno:"29",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
},{   rollno:"30",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
}
,{   rollno:"31",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
},{   rollno:"32",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
}
,{   rollno:"33",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
},{   rollno:"34",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
}
,{   rollno:"35",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
},{   rollno:"36",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
}
,{   rollno:"37",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
},{   rollno:"38",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
}
,{   rollno:"39",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
},{   rollno:"40",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
}
,{   rollno:"41",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
},{   rollno:"42",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
}
,{   rollno:"43",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
},{   rollno:"44",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
}
,{   rollno:"45",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
},{   rollno:"46",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
}
,{   rollno:"47",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
},{   rollno:"48",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
}
,{   rollno:"49",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
},{   rollno:"50",
name:"Muskan",
email:"Choudharymuskan@unthinkable.co"
},
]

var page=0;
var pageno=1;
var first = document.getElementById('first');

if(first)
{	
    first.addEventListener('click', function(){
        pageno = 1;
        let table = document.getElementById('table');
        table.innerHTML = "";
        let data = "";
        for(page = 0; page < 10; page++){
            if(listobj[page] === undefined) break;
            let info = '<tr> <td>'+ listobj[page].rollno +'</td> <td>'+ listobj[page].name +'</td> <td>'+ listobj[page].email +'</td>' + '</tr>';
            data += info;
        }
        table.innerHTML = data;
        let pgno = document.getElementById('pageno');
        pgno.innerHTML = pageno;
	});
}
else{
	console.log("no first");
}


//prev button
var prev=document.getElementById('prev');
prev.addEventListener('click', function(){
	if(pageno==1) return;
	let table = document.getElementById('table');
	table.innerHTML = "";
	let data = "";
	let nextpage=page-10;
	page=page-20;
	for(page; page < nextpage; page++){
		if(listobj[page] === undefined) break;
		let info = '<tr> <td>'+ listobj[page].rollno +'</td> <td>'+ listobj[page].name +'</td> <td>'+ listobj[page].email +'</td>' + '</tr>';
		data += info;
	}
	table.innerHTML = data;
	pageno--;
	let pgno = document.getElementById('pageno');
	pgno.innerHTML = pageno;
	
});


var next=document.getElementById('next');
next.addEventListener('click', function(){
	if(pageno===listobj.length/10) return ;
	let table = document.getElementById('table');
	table.innerHTML = "";
	let data = "";
	let nextpage=page+10;
	for(page ; page < nextpage; page++){
		if(listobj[page] === undefined) break;
		let info = '<tr> <td>'+ listobj[page].rollno +'</td> <td>'+ listobj[page].name +'</td> <td>'+ listobj[page].email +'</td>' + '</tr>';
		data += info;
	}
	table.innerHTML = data;
	pageno++;
	let pgno = document.getElementById('pageno');
	pgno.innerHTML = pageno;
	
});

var last=document.getElementById('last');
last.addEventListener('click', function(){
	
	let table = document.getElementById('table');
	table.innerHTML = "";
	let data = "";
	for(page =listobj.length-10; page < listobj.length; page++){
		if(listobj[page] === undefined) break;
		let info = '<tr> <td>'+ listobj[page].rollno +'</td> <td>'+ listobj[page].name +'</td> <td>'+ listobj[page].email +'</td>' + '</tr>';
		data += info;
	}
	table.innerHTML = data;
	pageno=listobj.length/10;
	let pgno = document.getElementById('pageno');
	pgno.innerHTML = pageno;

});