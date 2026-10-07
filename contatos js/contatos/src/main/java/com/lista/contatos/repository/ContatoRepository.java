package com.lista.contatos.repository;

import com.lista.contatos.model.Contato;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContatoRepository extends JpaRepository <Contato, Long >{
}
// jpaRepository <(minha classe do model), Long> pra não esquecer