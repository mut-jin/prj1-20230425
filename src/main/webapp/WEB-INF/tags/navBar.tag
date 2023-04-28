<%@ tag language="java" pageEncoding="UTF-8"%>
<%@ attribute name="current" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<div style="margin-bottom:80px"></div>
<nav class="navbar navbar-expand-lg bg-primary mb-5 fixed-top" data-bs-theme="bright">
	<div class="container-lg">
		<a class="navbar-brand" href="/list">
			<img alt="" src="/img/levis.png" height="50">
		</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
			data-bs-target="#navbarSupportedContent"
			aria-controls="navbarSupportedContent" aria-expanded="false"
			aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item"><a class="nav-link ${current eq 'list' ? 'active' : '' }" href="/list">목록</a></li>
				<li class="nav-item"><a class="nav-link ${current eq 'add' ? 'active' : '' }" href="/add">글쓰기</a></li>
			</ul>
			<form action="/list" class="d-flex" role="search">
				<input value="${param.search }" name="search" class="form-control me-2" type="search" placeholder="Search"
					aria-label="Search">
				<button class="btn btn-light" type="submit">
					<i class="fa-solid fa-magnifying-glass"></i>
				</button>
			</form>
		</div>
	</div>
</nav>