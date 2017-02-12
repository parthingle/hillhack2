document.addEventListener('DOMContentLoaded', function () {
	$("body").append("<span>Type in a keyword:</span><input type='text' name='keyword' class='form-control input-sm' placeholder='Lorem ipsum...'>")
	// Read the keyword
    $( ".input-sm" ).change(function() {
      var keyword = $("input[name='keyword']").val();
      var options = {
      	"element" : "mark",
      	"className" : "politic",
      	"separateWordSearch": false
      };
      console.log(keyword);
      	// Remove previous marked elements and mark
      	// the new keyword inside the context
      	$("body").unmark({
      	  done: function() {
      	    $("body").mark(keyword,options);
      	    $("mark").wrap("<b title='why tho'></b>");
      	  }
      	});
    });
});