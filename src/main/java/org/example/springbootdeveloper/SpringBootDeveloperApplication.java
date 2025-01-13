package org.example.springbootdeveloper;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing // create_at, updated_at 자동 업데이트
@SpringBootApplication
@OpenAPIDefinition(
        info = @Info(
                title = "My API",
                version = "1.0",
                description = "API Documentation for My Project"
        )
)
public class SpringBootDeveloperApplication {
    public static void main(String[] args) {
        SpringApplication.run(SpringBootDeveloperApplication.class, args);
    }
}
