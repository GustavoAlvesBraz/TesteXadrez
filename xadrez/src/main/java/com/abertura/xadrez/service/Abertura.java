package com.abertura.xadrez.service;

import com.abertura.xadrez.model.Dados;

public class Abertura extends Dados {

    public static String ruyLopes;
    public static String italiana;


       public String recomendo(Dados indico) {
           if (indico.isPosicional()
                   && indico.isFinais()
                   && (indico.isMilOitocentos() || indico.isDoisMil() || indico.isMaisDoisMil())
                   && (indico.isConvencional() || indico.isRapido())
               && indico.getTempo() >= 3
                && indico.getMemoria() >= 3)
           {
            return "Ruy Lopez";
       }

           return "Sistema London";
       }

    }

