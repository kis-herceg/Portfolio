package com.example.backend.controller;

import com.example.backend.model.ContactForm;
import com.example.backend.service.ContactFormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:3000")
public class ContactFormController {

    @Autowired
    private ContactFormService contactFormService;

    @PostMapping("/send")
    public void sendContactMessage(@RequestBody ContactForm contactForm) {
        contactFormService.sendMessage("pausdani4@gmail.com",
            "New Contact Form Submission",
            "Name: " + contactForm.getName() + "\n" +
            "Email: " + contactForm.getEmail() + "\n" +
            "Message: " + contactForm.getMessage());
    }
}
