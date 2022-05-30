package com.main.back_end_coding.repository.Login;

import com.main.back_end_coding.model.Login.LoginModel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends CrudRepository<LoginModel, Long> {
}
