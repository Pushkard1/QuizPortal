package com.demo.demo.service;

import com.demo.demo.model.User;
import com.demo.demo.model.roles;
import com.demo.demo.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class UserService {
    @Autowired
    UserRepo userRepo;

    public User CreateUser(User user) throws Exception {
        User local = userRepo.findByUsername(user.getUsername());

        if(local != null) {
            System.out.println("User already present...");
            throw new Exception("User already present...");
        }else {
            local = userRepo.save(user);
        }
        return local;
    }

    public User getUser(String username) {
        User user = userRepo.findByUsername(username);
        return user;
    }

    public void deleteUser(Long userId){
        userRepo.deleteById(userId);
    }
}
