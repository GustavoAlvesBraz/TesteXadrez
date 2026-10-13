package com.abertura.xadrez.controller;

import com.abertura.xadrez.model.Dados;
import com.abertura.xadrez.service.Abertura;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/Teste")
public class TesteController {

    private final Abertura abertura;

    public TesteController(Abertura abertura) {
        this.abertura = abertura;
    }

    @PostMapping
    public ResponseEntity<Dados> teste(@RequestBody Dados dados) {
        dados.setResultado(abertura.recomendo(dados));
        return ResponseEntity.status(HttpStatus.CREATED).body(dados);
    }
}
