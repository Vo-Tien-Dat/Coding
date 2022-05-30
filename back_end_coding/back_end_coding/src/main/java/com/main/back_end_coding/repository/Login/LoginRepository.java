package com.main.back_end_coding.repository.Login;

import javax.transaction.Transactional;

import com.main.back_end_coding.model.Login.LoginModel;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;

@Repository
public interface LoginRepository extends CrudRepository<LoginModel, Long> {
    @Modifying
    @Query(value = "INSERT INTO logout(user_name, password) VALUES(:user_name, :password)", nativeQuery = true)
    @Transactional
    void AddUser(@Param("user_name") String user_name, @Param("password") String password);
}
