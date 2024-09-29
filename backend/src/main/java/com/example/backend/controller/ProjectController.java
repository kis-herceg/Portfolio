package com.example.backend.controller;

import com.example.backend.model.Project;
import com.example.backend.model.ProjectTag;
import com.example.backend.model.TechCard;
import com.example.backend.service.ProjectService;
import com.example.backend.service.ProjectTagService;
import com.example.backend.service.TechCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = "http://localhost:3000")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @Autowired
    private ProjectTagService projectTagService;

    @Autowired
    private TechCardService techCardService;

    @GetMapping("/")
    public List<Project> getProjects() {
        return projectService.getProjects();
    }

    @GetMapping("/tags")
    public  List<ProjectTag> getProjectTags() {
        return projectTagService.getTags();
    }


}
