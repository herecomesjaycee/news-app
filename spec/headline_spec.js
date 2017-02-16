function checkHeadline(){
	var headline = new Headline("title")
	assert.isTrue(headline.returnTitle() =="title");
}

checkHeadline();