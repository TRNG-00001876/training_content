import org.example.Employee;
import org.example.EmployeeRepo;
import org.example.EmployeeService;
import org.example.SampleService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;



public class EmployeeServiceTest {

    @Mock
    private EmployeeRepo empRepo; // creating the mock object for the EmployeeRepository class. This mock is used instead of real
                                // EmployeeRepository Instance so that we can control the behaviour during testing
    @InjectMocks
    private EmployeeService employeeService;// We are injecting mocked EmployeeRepository into it.

    @Spy
    private SampleService sspy;

    @Captor
    private ArgumentCaptor<Long> cap;

   /* @Test
    public void testGetEmployeeDetails()
    {
        MockitoAnnotations.openMocks(this);
        Employee e=new Employee();
        // when(empRepo.save(e)).thenReturn(true);
        // boolean out=empService.saveEmployee(e);
        // assertTrue(out);
        e.setId(10);
        e.setName("Abdul");
        when(empRepo.findEmployeeBYid(10L)).thenReturn(e); // when(...).thenReturn(....)
        Employee res=employeeService.getEmployeeDetails(10L);
        verify(empRepo).findEmployeeBYid(cap.capture());
        assertEquals(e,res);
        System.out.println(cap.getValue());
        assertEquals(10L,cap.getValue());
    }*/
    @Test
    public void tobeSpiedMethodTest()
    {
        doReturn("Spied version of toBeSpiedMethod").when(sspy).tobeSpiedMethod();
    String res=sspy.tobeSpiedMethod();
    assertEquals("Spied version of tobeSpiedMethod",res);

    }














}
