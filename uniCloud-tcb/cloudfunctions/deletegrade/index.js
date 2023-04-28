'use strict';
exports.main = async (event, context) => {
	//event is the parameter uploaded by the client
	console.log('event : ', event)
	const db = uniCloud.database();
	const collection =await db.collection("grade"); 
	
	let res = await collection.where({_id:event.grade_id}).remove()
	//return data to the client
	return res
};
