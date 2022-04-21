package com.demo.demo.model;

import org.springframework.security.core.GrantedAuthority;

public enum roles implements GrantedAuthority {
    ADMIN,USER;


    @Override
    public String getAuthority() {
        return name();
    }
}
