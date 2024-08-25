package org.example.springbootdeveloper.service;

import lombok.RequiredArgsConstructor;
import org.example.springbootdeveloper.domain.Article;
import org.example.springbootdeveloper.domain.repository.BlogRepository;
import org.example.springbootdeveloper.dto.AddArticleRequest;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class BlogService {

    private final BlogRepository blogRepository;

    // 블로그 글 추가
    public Article save(AddArticleRequest request) {
        return blogRepository.save(request.toEntity());
    }
}
