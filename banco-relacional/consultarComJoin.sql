SELECT e.nome, c.nome, e.regiao FROM estados e, cidades c -- Plano Cartesiano até essa linha
WHERE e.id = c.estado_id;

SELECT
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Regiao
FROM estados e
INNER JOIN cidades c
    ON e.id = c.estado_id
WHERE e.sigla LIKE 'RJ';