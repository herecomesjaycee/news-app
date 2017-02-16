(function(exports){
	function HeadlineList(){
		this._list = [];
	}
		HeadlineList.prototype.add = function(headline){
			this._list.push(headline)
		}

		HeadlineList.prototype.return = function(){
			return this._list
		}
	exports.HeadlineList = HeadlineList;
	})(this);