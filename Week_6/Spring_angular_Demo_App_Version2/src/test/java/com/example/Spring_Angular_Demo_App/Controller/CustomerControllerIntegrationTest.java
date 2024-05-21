package com.example.Spring_Angular_Demo_App.Controller;

import com.example.Spring_Angular_Demo_App.DTO.CustomerDTO;
import com.example.Spring_Angular_Demo_App.DTO.CustomerSaveDTO;
import com.example.Spring_Angular_Demo_App.DTO.CustomerUpdateDTO;
import com.example.Spring_Angular_Demo_App.Repository.CustomerRepo;
import com.example.Spring_Angular_Demo_App.entity.Customer;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import static org.assertj.core.api.Assertions.assertThat;
import static org.hamcrest.Matchers.notNullValue;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@SpringBootTest
@AutoConfigureMockMvc
public class CustomerControllerIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private CustomerRepo customerRepo;

    @Autowired
    private ObjectMapper objectMapper;

    @BeforeEach
    void setUp() {
        customerRepo.deleteAll();
    }

    @Test
    @Transactional
    void testGetAllCustomers() throws Exception {
        Customer customer = new Customer("John Doe", "123 Street", 123);
        customerRepo.save(customer);

        mockMvc.perform(get("/api/v1/customer/getAllCustomers"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].customerid").value(customer.getCustomerid()))
                .andExpect(jsonPath("$[0].customername").value(customer.getCustomername()))
                .andExpect(jsonPath("$[0].customeraddress").value(customer.getCustomeraddress()))
                .andExpect(jsonPath("$[0].mobile").value(customer.getMobile()));
    }

    @Test
    @Transactional
    void testSaveCustomer() throws Exception {
        CustomerSaveDTO customerSaveDTO = new CustomerSaveDTO("John Doe", "123 Street", 123);

        mockMvc.perform(post("/api/v1/customer/createCustomer")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(customerSaveDTO)))
                .andExpect(status().isOk())
                .andExpect(content().string(notNullValue()));

        assertThat(customerRepo.findAll()).hasSize(1);
    }

    @Test
    @Transactional
    void testUpdateCustomer() throws Exception {
        Customer customer = new Customer("John Doe", "123 Street", 123);
        customerRepo.save(customer);

        CustomerUpdateDTO customerUpdateDTO = new CustomerUpdateDTO(customer.getCustomerid(), "John Doe Updated", "123 Street Updated", 456);

        mockMvc.perform(put("/api/v1/customer/updateCustomer")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(customerUpdateDTO)))
                .andExpect(status().isOk())
                .andExpect(content().string("Updated"));

        Customer updatedCustomer = customerRepo.findById(customer.getCustomerid()).orElseThrow();
        assertThat(updatedCustomer.getCustomername()).isEqualTo("John Doe Updated");
        assertThat(updatedCustomer.getCustomeraddress()).isEqualTo("123 Street Updated");
        assertThat(updatedCustomer.getMobile()).isEqualTo(456);
    }

    @Test
    @Transactional
    void testDeleteCustomer() throws Exception {
        Customer customer = new Customer("John Doe", "123 Street", 123);
        customerRepo.save(customer);

        mockMvc.perform(delete("/api/v1/customer/deleteCustomer/" + customer.getCustomerid()))
                .andExpect(status().isOk())
                .andExpect(content().string("deleted"));

        assertThat(customerRepo.findById(customer.getCustomerid())).isEmpty();
    }
}
