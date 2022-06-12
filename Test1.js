/* Q. Write a function to check if geekster exists in your array 
var list = ['geek', 'geekster', 'geeky'];
If it exists  add some code to find the index of geekster and remove that item.*/

function IsGeeksterExist(list)
{
	for(let i = 0 ; i < list.length ; i++)
	{
		if(list[i] == 'geekster')
		{
			console.log('geekster Exists at index: ' + i);
			for(let p = i ; p < list.length-1 ; p++)
			{
				list[p] = list[p+1];
			}
			return 1;
		}
	}
	return 0;
}


var list = ['geek','geeky'];
console.log(list);
let res = IsGeeksterExist(list);
if(res == 1){
	list.pop();
	console.log(list);
}
