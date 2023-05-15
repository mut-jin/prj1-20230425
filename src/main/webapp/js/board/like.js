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
		}
		//error:,
		//complete:,
	});
});