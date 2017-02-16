function checkHeadlineList(){
	var headline = new Headline("title");
	var headlineList = new HeadlineList()
	headlineList.add(headline);
	assert.isNotEmpty(headlineList.return());
}

checkHeadlineList();