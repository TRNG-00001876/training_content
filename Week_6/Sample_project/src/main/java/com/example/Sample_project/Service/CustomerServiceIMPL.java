package com.example.Sample_project.Service;

import com.example.Sample_project.CustomerRepo.CustomerRepo;
import com.example.Sample_project.DTO.CustomerDTO;
import com.example.Sample_project.DTO.CustomerSaveDTO;
import com.example.Sample_project.DTO.CustomerUpdateDTO;
import com.example.Sample_project.entity.Customer;
import com.example.Sample_project.exception.CustomerNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerServiceIMPL implements CustomerService {

    @Autowired
    private CustomerRepo customerRepo;

    @Override
    @Transactional
    public String addCustomer(CustomerSaveDTO customerSaveDTO) {
        Customer customer = new Customer(
                customerSaveDTO.getCustomername(),
                customerSaveDTO.getCustomeraddress(),
                customerSaveDTO.getMobile()
        );
        customerRepo.save(customer);
        return customer.getCustomername();
    }

    @Override
    @Transactional(readOnly = true)
    public List<CustomerDTO> getAllCustomer() {
        List<Customer> getCustomers = customerRepo.findAll();
        List<CustomerDTO> customerDTOList = new ArrayList<>();
        for (Customer a : getCustomers) {
            CustomerDTO customerDTO = new CustomerDTO(
                    a.getCustomerid(),
                    a.getCustomername(),
                    a.getCustomeraddress(),
                    a.getMobile()
            );
            customerDTOList.add(customerDTO);
        }
        return customerDTOList;
    }

    @Override
    @Transactional
    public String updateCustomers(CustomerUpdateDTO customerUpdateDTO) {
        Customer customer = customerRepo.findById(customerUpdateDTO.getCustomerid())
                .orElseThrow(() -> new CustomerNotFoundException("Customer ID not found"));
        customer.setCustomername(customerUpdateDTO.getCustomername());
        customer.setCustomeraddress(customerUpdateDTO.getCustomeraddress());
        customer.setMobile(customerUpdateDTO.getMobile());
        customerRepo.save(customer);
        return customer.getCustomername();
    }

    @Override
    @Transactional
    public boolean deleteCustomer(int id) {
        if (customerRepo.existsById(id)) {
            customerRepo.deleteById(id);
            return true;
        } else {
            throw new CustomerNotFoundException("Customer ID not found");
        }
    }
}
