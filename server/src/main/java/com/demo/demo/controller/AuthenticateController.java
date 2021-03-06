package com.demo.demo.controller;

import com.demo.demo.Security.JwtUtils;
import com.demo.demo.config.jwtrequest;
import com.demo.demo.config.jwtresponse;
import com.demo.demo.service.UserDetailsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.*;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@CrossOrigin("http://localhost:3000/")
public class AuthenticateController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Autowired
    private JwtUtils jwtUtils;


    @PostMapping("/generate-token")
    public ResponseEntity<?> generateToken(@RequestBody jwtrequest jwtrequest) throws Exception {
        try {
            authenticate(jwtrequest.getUsername(),jwtrequest.getPassword());
        }catch (UsernameNotFoundException e){
            e.printStackTrace();
            throw new Exception("User not Found ");

        }
        UserDetails userDetails = userDetailsService.loadUserByUsername(jwtrequest.getUsername());
        String token = jwtUtils.generateToken(userDetails);
        return ResponseEntity.ok(new jwtresponse(token));
    }


    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username,password));
        }catch (DisabledException e){
            throw new Exception("User Disabled "+e.getMessage());
        }catch (BadCredentialsException e){
            throw new Exception("Invalid Credentials "+e.getMessage());
        }
    }

    @GetMapping("/current-user")
    public UserDetails getCurrentUser(Principal principal){

        return userDetailsService.loadUserByUsername(principal.getName());
    }
}
