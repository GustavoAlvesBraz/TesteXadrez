package com.abertura.xadrez.controller;

import com.abertura.xadrez.model.Dados;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

public class Usuario extends Dados {


 @RestController
 @RequestMapping("/Teste")
    public class TesteController{



     @PostMapping
     public ResponseEntity<Dados> teste(@RequestBody Dados teste){
         teste.setMenosMil(true);
         teste.setMilQuinhentos(false);
         teste.setMilOitocentos(false);
         teste.setDoisMil(false);
         teste.setMaisDoisMil(false);
         switch (teste.getForca()) {
             case "1":
                 teste.setMenosMil(true);
                 break;
             case "2":
                 teste.setMilQuinhentos(true);
                 break;
             case "3":
                 teste.setMilOitocentos(true);
                 break;
             case "4":
                 teste.setDoisMil(true);
                 break;
             case "5":
                 teste.setMaisDoisMil(true);
                 break;
         }

         switch (teste.getModalidade()){
                 case "1":
                     teste.setBlitz(true);
                     break;
                 case"2":
                     teste.setRapido(true);
                     break;
                 case "3":
                     teste.setConvencional(true);
                     break;
             }

        if(teste.isMeioJogo() == true){
                teste.setPreferencia("meiojogo");
         } else { teste.setPreferencia("finais");

        }

        int memoriaUsuario = teste.getMemoria();
        int tempoUsuario = teste.getTempo();

        teste.isAgressivo();
        teste.isDefensivo();
        teste.isPosicional();
        teste.isTatico();




         return ResponseEntity.status(HttpStatus.CREATED).body(teste);
     }
 }
}

