package com.example.Spring_Angular_Demo_App.Service;

import com.example.Spring_Angular_Demo_App.DTO.CustomerDTO;
import com.example.Spring_Angular_Demo_App.DTO.CustomerSaveDTO;
import com.example.Spring_Angular_Demo_App.DTO.CustomerUpdateDTO;
import com.example.Spring_Angular_Demo_App.Repository.CustomerRepo;
import com.example.Spring_Angular_Demo_App.entity.Customer;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
public class CustomerServiceIMPLTest {

        @Mock
        private CustomerRepo customerRepo;

        @InjectMocks
        private CustomerServiceIMPL customerService;

        @BeforeEach
        void setUp() {
            MockitoAnnotations.openMocks(this);
        }

        @Test
        void addCustomer() {
            CustomerSaveDTO customerSaveDTO = new CustomerSaveDTO("John Doe", "123 Street", 12345);
            Customer customer = new Customer("John Doe", "123 Street", 12345);
            customer.setCustomerid(1);

            when(customerRepo.save(any(Customer.class))).thenReturn(customer);

            String result = customerService.addCustomer(customerSaveDTO);

            assertEquals("1", result);
            verify(customerRepo, times(1)).save(any(Customer.class));
        }

        @Test
        void getAllCustomer() {
            Customer customer1 = new Customer("John Doe", "123 Street", 123);
            customer1.setCustomerid(1);
            Customer customer2 = new Customer("Jane Doe", "456 Street", 111);
            customer2.setCustomerid(2);

            when(customerRepo.findAll()).thenReturn(Arrays.asList(customer1, customer2));

            List<CustomerDTO> result = customerService.getAllCustomer();

            assertEquals(2, result.size());
            assertEquals("John Doe", result.get(0).getCustomername());
            assertEquals("Jane Doe", result.get(1).getCustomername());
            verify(customerRepo, times(1)).findAll();
        }

        @Test
        void updateCustomers() {
            CustomerUpdateDTO customerUpdateDTO = new CustomerUpdateDTO(1, "John Smith", "123 Street", 122);
            Customer customer = new Customer("John Doe", "123 Street", 111);
            customer.setCustomerid(1);

            when(customerRepo.existsById(1)).thenReturn(true);
            when(customerRepo.findById(1)).thenReturn(Optional.of(customer));

            String result = customerService.updateCustomers(customerUpdateDTO);

            assertEquals("Updated", result);
            verify(customerRepo, times(1)).existsById(1);
            verify(customerRepo, times(1)).findById(1);
            verify(customerRepo, times(1)).save(customer);
        }

        @Test
        void updateCustomers_CustomerNotFound() {
            CustomerUpdateDTO customerUpdateDTO = new CustomerUpdateDTO(1, "John Smith", "123 Street", 1111);

            when(customerRepo.existsById(1)).thenReturn(false);

            String result = customerService.updateCustomers(customerUpdateDTO);

            assertEquals("CustomerId doesn't exist", result);
            verify(customerRepo, times(1)).existsById(1);
            verify(customerRepo, times(0)).findById(1);
            verify(customerRepo, times(0)).save(any(Customer.class));
        }

        @Test
        void deleteCustomer() {
            when(customerRepo.existsById(1)).thenReturn(true);

            boolean result = customerService.deleteCustomer(1);

            assertTrue(result);
            verify(customerRepo, times(1)).existsById(1);
            verify(customerRepo, times(1)).deleteById(1);
        }

        @Test
        void deleteCustomer_CustomerNotFound() {
            when(customerRepo.existsById(1)).thenReturn(false);

            boolean result = customerService.deleteCustomer(1);

            assertFalse(result);
            verify(customerRepo, times(1)).existsById(1);
            verify(customerRepo, times(0)).deleteById(1);
        }
}
