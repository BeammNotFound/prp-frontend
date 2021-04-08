
$("a").click(function(){
	console.log(11);
	var arr = "";
	$("input:checkbox[name='date']:checked").each(function(i){
		arr += $(this).val() + ','
	});
	console.log('-----选中的值-----', arr);
})

