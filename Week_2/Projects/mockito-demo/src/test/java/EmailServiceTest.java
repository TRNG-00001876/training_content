import org.example.EmailService;
import org.junit.Test;
import org.mockito.Mockito;

import static org.mockito.Answers.CALLS_REAL_METHODS;
import static org.mockito.Mockito.*;


public class EmailServiceTest {

    @Test
    public void testSendEmail() {
        // Create a mock object for EmailService
        EmailService emailService = mock(EmailService.class, withSettings().defaultAnswer(CALLS_REAL_METHODS));

        // Call the sendEmail method on the mock object
        emailService.sendEmail("test@example.com", "Hello", "Hello, world!");

        // Verify that the sendEmail method was called with the expected arguments
        verify(emailService).sendEmail("test@example.com", "Hello", "Hello, world!");
    }
}