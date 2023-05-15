let checkEmail = true;
let checkNickName = true;
let checkPassword = true;

function enableSubmit() {
	if (checkEmail || checkNickName || checkPassword) {
		$("#modifyButton").removeAttr("disabled");
	} else {
		$("#modifyButton").attr("disabled", "");
	}
};

$("#inputPassword, #inputPasswordCheck").keyup(function() {
	const pw1 = $("#inputPassword").val();
	const pw2 = $("#inputPasswordCheck").val();
	if (pw1 === pw2) {
		$("#modifyButton").removeClass("disabled");
		$("#passwordSuccessText").removeClass("d-none");
		$("#passwordFailText").addClass("d-none");
		checkPassword = true;
	} else {
		$("#modifyButton").addClass("disabled");
		$("#passwordSuccessText").addClass("d-none");
		$("#passwordFailText").removeClass("d-none");
		checkPassword = false;
	}
	enableSubmit();
});

// nickName 중복확인 버튼 클릭시
$("#checkNickNameBtn").click(function() {
	const nickName = $("#inputNickName").val();
	$.ajax("/member/checkNickName/" + nickName, {
		success: function(data) {
			`{"available" : true}`
			
			if (data.available) {
				$("#availableNickNameMessage").removeClass("d-none");
				$("#notAvailableNickNameMessage").addClass("d-none");
				checkNickName = true;
			} else {
				$("#availableNickNameMessage").addClass("d-none");
				$("#notAvailableNickNameMessage").removeClass("d-none");
				checkNickName = false;
			}
		},
		complete: enableSubmit
	});
});

// input 닉네임에 키보드 입력 발생시
$("#inputNickName").keyup(function() {
	// 아이디 중복확인 다시
	checkNickName = false;
	$("#availableNickNameMessage").addClass("d-none")
	$("#notAvailableNickNameMessage").addClass("d-none")
	// submit 버튼 비활성화
	enableSubmit();
});

$("#inputNickName").keyup(function() {
	checkNickName = false;
	$("#availableNickNameMessage").addClass("d-none");
	$("#notAvailableNickNameMessage").addClass("d-none");
	enableSubmit();
});

$("#inputEmail").keyup(function() {
	checkEmail = false;
	$("#availableEmailMessage").addClass("d-none");
	$("#notAvailableEmailMessage").addClass("d-none");
	enableSubmit();
});

// email 중복확인 버튼 클릭시
$("#checkEmailBtn").click(function() {
	const currentemail = document.getElementById("#inputEmail");
	const useremail = $("#inputEmail").val();
	$.ajax("/member/checkEmail/" + useremail, {
		success: function(data) {
			`{"available" : true}`
			
			if (data.available) {
				// 사용가능하다는 메세지 출력
				$("#availableEmailMessage").removeClass("d-none");
				$("#notAvailableEmailMessage").addClass("d-none");
				
				// 중복확인 되었다는 표시
				checkEmail = true;
			} else {
				// 사용 불가능하다는 메세지 출력
				$("#availableEmailMessage").addClass("d-none");
				$("#notAvailableEmailMessage").removeClass("d-none");
				
				// 중복확인 안되었다는 표시
				checkEmail = false;
			}
		},
		// 수정버튼 활성화 / 비활성화
		complete: enableSubmit
	})
});

// input 이메일에 키보드 입력 발생시
$("#inputEmail").keyup(function() {
	// 아이디 중복확인 다시
	checkEmail = false;
	$("#availableEmailMessage").addClass("d-none")
	$("#notAvailableEmailMessage").addClass("d-none")
	// submit 버튼 비활성화
	enableSubmit();
});














