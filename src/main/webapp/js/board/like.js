const toast = new bootstrap.Toast(document.querySelector("#liveToast"));

$("#likeIcon").click(function() {
	// 게시물 번호 request body에 추가
	const boardId = $("#boardIdText").text().trim();
	//const data = {boardId : boardId};
	const data = {boardId};
	$.ajax("/like", {
		method: "post",
		contentType: "application/json",
		data: JSON.stringify(data),
		
		success: function(data) {
			if (data.like) {
				// 꽉찬 하트
				$("#likeIcon").html(`<i class="fa-solid fa-heart" style="color: #d81818;"></i>`);
			} else {
				// 빈하트
				$("#likeIcon").html(`<i class="fa-regular fa-heart" style="color: #c52b2b;"></i>`);
			}
		},
		error: function(jqXHR) {
			//console.log("좋아요 실패");
			//console.log(jqXHR);
			//console.log(jqXHR.responseJSON);
			//$("body").prepend(jqXHR.responseJSON.message);
			$(".toast-body").text(jqXHR.responseJSON.message);
			toast.show();
		},
		//complete:,
	});
});