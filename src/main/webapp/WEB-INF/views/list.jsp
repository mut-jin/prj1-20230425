<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="jakarta.tags.core"%>
<%@ taglib prefix="my" tagdir="/WEB-INF/tags"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Insert title here</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
</head>
<body>

	<my:navBar current="list" />
	
	<my:alert></my:alert>

	<div class="container">
		<h1>게시물 목록</h1>
		<table class="table">
			<thead>
				<tr>
					<th>번호</th>
					<th>제목</th>
					<th>글쓴이</th>
					<th>작성일</th>
				</tr>
			</thead>
			<tbody>
				<c:forEach items="${boardList }" var="list">
					<tr>
						<td>${list.id }</td>
						<td>
							<a href="/id/${list.id }"> ${list.title } </a>
						</td>
						<td>${list.writer }</td>
						<td>${list.inserted }</td>
					</tr>
				</c:forEach>
			</tbody>
		</table>
		
		<!-- 페이지네이션 -->
		<div>
			<nav aria-label="Page navigation example">
				<ul class="pagination">
				
					<c:forEach begin="1" end="20" var="pageNumber">
						<!-- li.page-item>a.page-link -->
						<c:url value="/list" var="pageLink">
							<c:param name="page" value="${pageNumber }"></c:param>
						</c:url>
						<li class="page-item">
							<a href="${pageLink }" class="page-link">${pageNumber }</a>
						</li>
					</c:forEach>
				</ul>
			</nav>
		</div>
	</div>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
</body>
</html>
