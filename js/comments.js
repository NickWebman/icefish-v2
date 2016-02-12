
function Comment(options) {
	this.comment = options.comment;
}

function CommentFactory() {}

CommentFactory.prototype.createComment = function createAComment(aFish, aFishLanded) {

	function generateComment(){
		var comments, comment;
		if (aFishLanded.fishLanded){
			comments = ['rad', 'cool', 'nice', 'fuck yea', 'tits', 'awesome'];  
		} else {
			comments = ['shit', 'fuck', 'damn', 'dickbutt', 'crud',, 'son of a...'];  
		}   
		comment = comments[Math.round(Math.random() * (comments.length - 1))];
		comment = '"'+ comment +'"';
		return comment;
	}

	var options = {
		comment: generateComment()
	};
	
	return new Comment(options);
}



