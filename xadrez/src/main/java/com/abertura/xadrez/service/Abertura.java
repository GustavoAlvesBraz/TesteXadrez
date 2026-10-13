package com.abertura.xadrez.service;

import com.abertura.xadrez.model.Dados;
import org.springframework.stereotype.Service;

@Service
public class Abertura {

    public String recomendo(Dados d) {
        if (d.isPosicional()
                && d.isFinais()
                && (d.isMilOitocentos() || d.isDoisMil() || d.isMaisDoisMil())
                && (d.isConvencional() || d.isRapido())
                && d.getTempo() >= 3
                && d.getMemoria() >= 3) {
            return "Ruy Lopez";
        }
        return "Sistema London";
    }
}