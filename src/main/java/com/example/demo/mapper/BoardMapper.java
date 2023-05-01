package com.example.demo.mapper;

import java.util.*;

import org.apache.ibatis.annotations.*;

import com.example.demo.domain.*;

@Mapper
public interface BoardMapper {

	@Select("""
			SELECT
				id,
				title,
				writer,
				inserted
			FROM Board
			ORDER BY id DESC
			""")
	List<Board> selectAll();

	@Select("""
			SELECT *
			FROM Board
			WHERE id = #{id}
			""")
	Board selectById(Integer id);

	@Update("""
			UPDATE Board
			SET
				title = #{title},
				body = #{body},
				writer = #{writer}
			WHERE
				id = #{id}
			""")
	int update(Board board);

	@Delete("""
			DELETE FROM Board
			WHERE id = #{id}
			""")
	int deleteById(Integer id);
	
	@Insert("""
			INSERT INTO Board (title, body, writer)
			VALUES (#{title}, #{body}, #{writer})
			""")
	@Options(useGeneratedKeys = true, keyProperty = "id")
	int insert(Board board);

	@Select("""
			<script>
			<bind name="p" value="'%' + search + '%'" />
			SELECT
				id,
				title,
				body,
				writer,
				inserted
			FROM Board
			<where>
			<if test="(type eq 'title') or (type eq 'all') ">
				title LIKE #{p}
			</if>
			<if test="(type eq 'body') or (type eq 'all') ">
			 	OR body LIKE #{p}
			</if>
			<if test="(type eq 'writer') or (type eq 'all')">
				OR writer LIKE #{p}
			</if>
			</where>
			ORDER BY id DESC
			LIMIT #{startIndex}, #{rowPerPage}
			</script>
			""")
	List<Board> selectAllPaging(Integer startIndex, Integer rowPerPage, String search, String type, String body, String writer);

	@Select("""
			<script>
			<bind name="p" value="'%' + search + '%'" />
			SELECT COUNT(*) 
			FROM Board
			<where>
				<if test="(type eq 'title') or (type eq 'all') ">
					title LIKE #{p}
				</if>
				<if test="(type eq 'body') or (type eq 'all') ">
				 	OR body LIKE #{p}
				</if>
				<if test="(type eq 'writer') or (type eq 'all')">
					OR writer LIKE #{p}
				</if>
			</where>
			</script>
			""")
	Integer countAll(String search, String type);
}
