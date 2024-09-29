package com.example.backend.service;

import com.example.backend.model.ProjectTag;

import java.util.List;

public interface ProjectTagService {

    List<ProjectTag> getTags();

    List<String> getProjectTags(Integer id);
}
