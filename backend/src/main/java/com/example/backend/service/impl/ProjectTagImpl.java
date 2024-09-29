package com.example.backend.service.impl;

import com.example.backend.model.ProjectTag;
import com.example.backend.model.TechCard;
import com.example.backend.repository.ProjectRepository;
import com.example.backend.repository.ProjectTagRepository;
import com.example.backend.repository.TechCardRepository;
import com.example.backend.service.ProjectTagService;
import com.example.backend.service.TechCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProjectTagImpl implements ProjectTagService {

    @Autowired
    private ProjectTagRepository projectTagRepository;

    @Autowired
    private TechCardRepository techCardRepository;

    @Override
    public List<ProjectTag> getTags() {
        return projectTagRepository.findAll();
    }

    @Override
    public List<String> getProjectTags(Integer id) {

        List<Integer> techCardIds = projectTagRepository.findAll().stream()
                .filter(tag -> tag.getProjectId().equals(id))
                .map(ProjectTag::getTechCardId)
                .collect(Collectors.toList());

        return techCardRepository.findAll().stream()
                .filter(techCard -> techCardIds.contains(techCard.getId()))
                .map(TechCard::getName)
                .collect(Collectors.toList());

    }

}
