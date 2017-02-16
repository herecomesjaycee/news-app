(function(exports){

	function Headline(title, imgSrc, href){
		this._title = title
		this._imgSrc= imgSrc
		this._href = href
	}

	Headline.prototype.returnTitle = function(){
		return this._title;
	}

	exports.Headline = Headline;
})(this);