package com.example.backend.service;

public interface ContactFormService {

    void sendMessage(String to, String subject, String text);
}
