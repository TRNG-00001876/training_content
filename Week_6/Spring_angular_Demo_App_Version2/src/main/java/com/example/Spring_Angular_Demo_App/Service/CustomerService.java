package com.example.Spring_Angular_Demo_App.Service;

import com.example.Spring_Angular_Demo_App.DTO.CustomerDTO;
import com.example.Spring_Angular_Demo_App.DTO.CustomerSaveDTO;
import com.example.Spring_Angular_Demo_App.DTO.CustomerUpdateDTO;

import java.util.List;

public interface CustomerService {
    String addCustomer(CustomerSaveDTO customerSaveDTO);
    List<CustomerDTO> getAllCustomer();
    String updateCustomers(CustomerUpdateDTO customerUpdateDTO);
    boolean deleteCustomer(int id);
}
