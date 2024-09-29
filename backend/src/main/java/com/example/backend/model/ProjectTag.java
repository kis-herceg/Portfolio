package com.example.backend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "project_tags")
public class ProjectTag {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private Integer projectId;
    private Integer techCardId;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getProjectId() {
        return projectId;
    }

    public void setProjectId(Integer projectId) {
        this.projectId = projectId;
    }

    public Integer getTechCardId() {
        return techCardId;
    }

    public void setTechCardId(Integer techCardId) {
        this.techCardId = techCardId;
    }
}
