package com.example.demo.service;

import java.util.*;

import org.springframework.beans.factory.annotation.*;
import org.springframework.stereotype.*;

import com.example.demo.domain.*;
import com.example.demo.mapper.*;

@Service
public class BoardService {

	@Autowired
	private BoardMapper mapper;
	
	public List<Board> listBoard() {
		List<Board> list = mapper.selectAll();
		return list;
	}

	public Board getBoard(Integer id) {
		// TODO Auto-generated method stub
		return mapper.selectById(id);
	}

	public boolean modify(Board board) {
		// TODO Auto-generated method stub
		int cnt = mapper.update(board);
		
		return cnt == 1;
	}

	public boolean remove(Integer id) {
		int cnt = mapper.deleteById(id);
		return cnt == 1;
	}

	public Board getBoard() {
		Board board = new Board();
		return board;
	}
	
	public boolean add(Integer id) {
		int cnt = mapper.addById(id);
		return cnt == 1;
	}
	

	
}
