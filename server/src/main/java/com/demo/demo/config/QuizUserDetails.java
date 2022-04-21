package com.demo.demo.config;

import com.demo.demo.model.User;
import com.demo.demo.model.roles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.EnumSet;
import java.util.HashSet;
import java.util.Set;

public class QuizUserDetails implements UserDetails {
    @Autowired
    private User user;

    public QuizUserDetails(User user) {
        this.user = user;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
//        Set<roles> set = new HashSet<>();
//        EnumSet<roles> roles = EnumSet.allOf(roles.class);
//        roles.forEach(role -> set.add(role));
//
//        return set;
          Set<Authority> set = new HashSet<>();
          user.getRoles().forEach(role -> set.add(new Authority(role.toString())));
          return set;
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getUsername();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return user.isEnabled();
    }
}
