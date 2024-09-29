package com.example.backend.service.impl;

import com.example.backend.model.Project;
import com.example.backend.repository.ProjectRepository;
import com.example.backend.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectRepository projectRepository;


    @Override
    public List<Project> getProjects() {
        return projectRepository.findAll();
    }
}
