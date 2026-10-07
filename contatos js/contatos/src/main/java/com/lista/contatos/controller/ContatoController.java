package com.lista.contatos.controller;

import com.lista.contatos.model.Contato;
import com.lista.contatos.repository.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/contatos")
public class ContatoController {

    @Autowired
    private ContatoRepository repository; //importando a interface jpa

    @GetMapping
    public List<Contato> ListarContatos(){
        return repository.findAll();
    }

    @PostMapping
    public Contato salvar(@RequestBody Contato contato){

        return repository.save(contato);
    }


    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id){
        repository.deleteById(id);
    }
}
