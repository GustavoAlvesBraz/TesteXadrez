package com.abertura.xadrez.model;




public class Dados {
    private String forca;
    private boolean menosMil= false;
    private boolean milQuinhentos = false;
    private boolean milOitocentos = false;
    private boolean doisMil = false;
    private boolean maisDoisMil = false;


    private boolean agressivo = false;
    private boolean defensivo = false;
    private boolean posicional = false;
    private boolean tatico = false;

    private int memoria;
    private int tempo;

    private String modalidade;
    private boolean convencional = false;
    private boolean rapido = false;
    private boolean blitz = false;

    private String preferencia;
    private boolean meioJogo = false;
    private boolean finais = false;

    private String resultado;

    public Dados() {
    }

    public String getForca() {
        return forca;
    }

    public void setForca(String forca) {
        this.forca = forca;
            forcaEscolhida();
    }

    public String getModalidade() {
        return modalidade;
    }

    public void setModalidade(String modalidade) {
        this.modalidade = modalidade;
            modalidadeEscolhida();
    }

    public void modalidadeEscolhida(){
        this.blitz = false;
        this.rapido = false;
        this.convencional = false;

        if(this.modalidade !=null){
            switch (this.modalidade){
                case "1":
                    this.blitz = true;
                    break;
                case"2":
                    this.rapido = true;
                    break;
                case "3":
                    this.convencional = true;
                    break;
            }
        }
    }

    public String getPreferencia() {
        return preferencia;
    }

    public void setPreferencia(String preferencia) {
        this.preferencia = preferencia;
        this.meioJogo = "meiojogo".equals(preferencia);
        this.finais = "finais".equals(preferencia);
    }

    public void forcaEscolhida(){
        this.menosMil = false;
        this.milQuinhentos = false;
        this.milOitocentos = false;
        this.doisMil = false;
        this.maisDoisMil = false;

        if (this.forca != null){
        switch (this.forca) {
            case "1":
                this.menosMil = true;
                break;
            case "2":
                this.milQuinhentos = true;
                break;
            case "3":
                this.milOitocentos = true;
                break;
            case "4":
                this.doisMil = true;
                break;
            case "5":
                this.maisDoisMil = true;
                break;
        }
         }


    }
    public boolean isMenosMil() {
        return menosMil;
    }

    public void setMenosMil(boolean menosMil) {
        this.menosMil = menosMil;
    }

    public boolean isMilQuinhentos() {
        return milQuinhentos;
    }

    public void setMilQuinhentos(boolean milQuinhentos) {
        this.milQuinhentos = milQuinhentos;
    }

    public boolean isMilOitocentos() {
        return milOitocentos;
    }

    public void setMilOitocentos(boolean milOitocentos) {
        this.milOitocentos = milOitocentos;
    }

    public boolean isDoisMil() {
        return doisMil;
    }

    public void setDoisMil(boolean doisMil) {
        this.doisMil = doisMil;
    }

    public boolean isMaisDoisMil() {
        return maisDoisMil;
    }

    public void setMaisDoisMil(boolean maisDoisMil) {
        this.maisDoisMil = maisDoisMil;
    }

    public boolean isAgressivo() {
        return agressivo;
    }

    public void setAgressivo(boolean agressivo) {
        this.agressivo = agressivo;
    }

    public boolean isDefensivo() {
        return defensivo;
    }

    public void setDefensivo(boolean defensivo) {
        this.defensivo = defensivo;
    }

    public boolean isPosicional() {
        return posicional;
    }

    public void setPosicional(boolean posicional) {
        this.posicional = posicional;
    }

    public boolean isTatico() {
        return tatico;
    }

    public void setTatico(boolean tatico) {
        this.tatico = tatico;
    }

    public int getMemoria() {
        return memoria;
    }

    public void setMemoria(int memoria) {
        this.memoria = memoria;
    }

    public int getTempo() {
        return tempo;
    }

    public void setTempo(int tempo) {
        this.tempo = tempo;
    }

    public boolean isConvencional() {
        return convencional;
    }

    public void setConvencional(boolean convencional) {
        this.convencional = convencional;
    }

    public boolean isRapido() {
        return rapido;
    }

    public void setRapido(boolean rapido) {
        this.rapido = rapido;
    }

    public boolean isBlitz() {
        return blitz;
    }

    public void setBlitz(boolean blitz) {
        this.blitz = blitz;
    }

    public boolean isMeioJogo() {
        return meioJogo;
    }

    public void setMeioJogo(boolean meioJogo) {
        this.meioJogo = meioJogo;
    }

    public boolean isFinais() {
        return finais;
    }

    public void setFinais(boolean finais) {
        this.finais = finais;
    }

    public String getResultado() {
        return resultado;
    }

    public void setResultado(String resultado) {
        this.resultado = resultado;
    }
}
