package com.example.estagio.repository;

import com.example.estagio.entity.Tarefa;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface TarefaRepository extends JpaRepository<Tarefa, Long> {

    List<Tarefa> findByResponsavelContainingIgnoreCase(String responsavel);

    List<Tarefa> findByDataEntrega(LocalDate dataEntrega);

    List<Tarefa> findByConcluidaFalse();

    List<Tarefa> findByConcluidaFalseandResponsavelContaingIgnoreCase(String responsavel);
}