package ru.coco.todo.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/** Allows the front-end (e.g. hosted on GitHub Pages) to call the API cross-origin. */
@Configuration
public class CorsConfig {

    @Bean
    WebMvcConfigurer corsConfigurer(@Value("${app.cors.allowed-origins:}") String[] allowedOrigins) {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                if (allowedOrigins.length > 0 && !allowedOrigins[0].isBlank()) {
                    registry.addMapping("/api/**")
                            .allowedOrigins(allowedOrigins)
                            .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS");
                }
            }
        };
    }
}
