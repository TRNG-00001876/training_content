package com.example.Spring_Angular_Demo_App.Actuator;

import com.example.Spring_Angular_Demo_App.Service.CustomerServiceIMPL;
import com.example.Spring_Angular_Demo_App.DTO.CustomerDTO;
import org.springframework.boot.actuate.endpoint.annotation.Endpoint;
import org.springframework.boot.actuate.endpoint.annotation.ReadOperation;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@Endpoint(id = "customerStats")
public class CustomerStatsEndpoint {

    private final CustomerServiceIMPL customerService;

    public CustomerStatsEndpoint(CustomerServiceIMPL customerService) {
        this.customerService = customerService;
    }

    @ReadOperation
    public CustomerStats getCustomerStats() {
        List<CustomerDTO> allCustomers = customerService.getAllCustomer();
        int totalCustomers = allCustomers.size();

        // For simplicity, return total customers and some example metrics
        return new CustomerStats(totalCustomers);
    }

    public static class CustomerStats {
        private final int totalCustomers;

        public CustomerStats(int totalCustomers) {
            this.totalCustomers = totalCustomers;
        }

        public int getTotalCustomers() {
            return totalCustomers;
        }
    }
}
