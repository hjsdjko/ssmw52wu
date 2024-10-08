package com.dao;

import com.entity.XiaoyuanzixunEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.XiaoyuanzixunVO;
import com.entity.view.XiaoyuanzixunView;


/**
 * 校园资讯
 * 
 * @author 
 * @email 
 * @date 2021-05-01 13:25:31
 */
public interface XiaoyuanzixunDao extends BaseMapper<XiaoyuanzixunEntity> {
	
	List<XiaoyuanzixunVO> selectListVO(@Param("ew") Wrapper<XiaoyuanzixunEntity> wrapper);
	
	XiaoyuanzixunVO selectVO(@Param("ew") Wrapper<XiaoyuanzixunEntity> wrapper);
	
	List<XiaoyuanzixunView> selectListView(@Param("ew") Wrapper<XiaoyuanzixunEntity> wrapper);

	List<XiaoyuanzixunView> selectListView(Pagination page,@Param("ew") Wrapper<XiaoyuanzixunEntity> wrapper);
	
	XiaoyuanzixunView selectView(@Param("ew") Wrapper<XiaoyuanzixunEntity> wrapper);
	
}
