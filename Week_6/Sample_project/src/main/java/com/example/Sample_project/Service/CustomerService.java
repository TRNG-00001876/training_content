package com.example.Sample_project.Service;

import com.example.Sample_project.DTO.CustomerDTO;
import com.example.Sample_project.DTO.CustomerSaveDTO;
import com.example.Sample_project.DTO.CustomerUpdateDTO;

import java.util.List;

public interface CustomerService {
    String addCustomer(CustomerSaveDTO customerSaveDTO);

    List<CustomerDTO> getAllCustomer();

    String updateCustomers(CustomerUpdateDTO customerUpdateDTO);

    boolean deleteCustomer(int id);
}