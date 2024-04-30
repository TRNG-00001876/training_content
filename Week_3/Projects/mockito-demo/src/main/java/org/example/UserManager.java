package org.example;

public class UserManager {
    private final EmailService emailService;

    public UserManager(EmailService emailService) {
        this.emailService = emailService;
    }

    public void registerUser(String email) {
        emailService.sendEmail(email, "Welcome!", "Thank you for registering.");
    }
}