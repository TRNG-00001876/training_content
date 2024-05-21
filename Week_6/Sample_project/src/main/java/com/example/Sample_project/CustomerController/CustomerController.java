package com.example.Sample_project.CustomerController;

import com.example.Sample_project.DTO.CustomerDTO;
import com.example.Sample_project.DTO.CustomerSaveDTO;
import com.example.Sample_project.DTO.CustomerUpdateDTO;
import com.example.Sample_project.Service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;

import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;
import jakarta.validation.Valid;
import jakarta.validation.ConstraintViolationException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
@RequestMapping("api/v1/customer")
public class CustomerController {

    @Autowired
    private CustomerService customerService;

    @PostMapping(path = "/save")
    public ResponseEntity<?> saveCustomer(@RequestBody CustomerSaveDTO customerSaveDTO) {
        try {
            String id = customerService.addCustomer(customerSaveDTO);
            return ResponseEntity.ok(id);
        } catch (ConstraintViolationException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }

    @GetMapping(path = "/getAllCustomer")
    public ResponseEntity<?> getAllCustomer() {
        List<CustomerDTO> allCustomers = customerService.getAllCustomer();
        return ResponseEntity.ok(allCustomers);
    }

    @PutMapping(path = "/update")
    public ResponseEntity<?> updateCustomer(@Valid @RequestBody CustomerUpdateDTO customerUpdateDTO, BindingResult result) {
        try {
            String id = customerService.updateCustomers(customerUpdateDTO);
            return ResponseEntity.ok(id);
        }
        catch(ConstraintViolationException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }

    @DeleteMapping(path = "/deletecustomer/{id}")
    public ResponseEntity<String> deleteCustomer(@PathVariable(value = "id") int id) {
        customerService.deleteCustomer(id);
        return new ResponseEntity<>("Deleted successfully", HttpStatus.OK);
    }


}
