package com.example.Spring_Angular_Demo_App.Controller;

import com.example.Spring_Angular_Demo_App.DTO.CustomerDTO;
import com.example.Spring_Angular_Demo_App.DTO.CustomerSaveDTO;
import com.example.Spring_Angular_Demo_App.DTO.CustomerUpdateDTO;
import com.example.Spring_Angular_Demo_App.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("api/v1/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @GetMapping(path="/getAllCustomers")
    public List<CustomerDTO> getAllCustomers()
    {
        List<CustomerDTO>allCustomers=customerService.getAllCustomer();
        return allCustomers;
    }
    @PostMapping(path="/createCustomer")
    public String saveCustomer(@RequestBody CustomerSaveDTO customerSaveDTO)
    {
        String id=customerService.addCustomer(customerSaveDTO);
        return id;
    }
    @PutMapping(path="/updateCustomer")
    public String updateCustomer(@RequestBody CustomerUpdateDTO customerUpdateDTO) {
        String id = customerService.updateCustomers(customerUpdateDTO);
        return id;
    }
    @DeleteMapping(path="/deleteCustomer/{id}")
    public String deleteCustomer(@PathVariable(value="id")int id) {
        boolean deleteCustomer= customerService.deleteCustomer(id);
        return "deleted";
    }

}
