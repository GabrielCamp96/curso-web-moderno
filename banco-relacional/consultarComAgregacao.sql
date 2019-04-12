SELECT
    regiao as 'Região',
    SUM(populacao) as Total
FROM estados
GROUP BY regiao
ORDER BY Total DESC;

SELECT
    SUM(populacao) AS Total
FROM estados;

SELECT
    AVG(populacao) AS Media
FROM estados;