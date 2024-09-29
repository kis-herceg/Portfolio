package com.example.backend.controller;

import com.example.backend.model.ProjectTag;
import com.example.backend.service.ProjectTagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/tags")
@CrossOrigin(origins = "http://localhost:3000")
public class TagController {
    @Autowired
    private ProjectTagService projectTagService;

    @GetMapping("/")
    public List<ProjectTag> getTags() {
        return projectTagService.getTags();
    }

    @GetMapping("/{id}")
    public List<String> getProjectTags(@PathVariable Integer id) {
        return projectTagService.getProjectTags(id);
    }
}
