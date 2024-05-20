package com.example.Spring_Angular_Demo_App.Repository;


import com.example.Spring_Angular_Demo_App.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface CustomerRepo extends JpaRepository <Customer,Integer>{
}
