package com.example.laurardemo.repo;

import com.example.laurardemo.entity.PersonEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

/**
 * Created by Lau on 4/2/2019.
 */
@RepositoryRestResource(collectionResourceRel = "person", path = "person")
@CrossOrigin(origins = "http://localhost:3000")
public interface PersonRepo extends MongoRepository<PersonEntity,Integer> {
}
