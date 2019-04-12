INSERT INTO cidades (nome, area, estado_id) VALUES 
    ('Campinas', 795, (SELECT id FROM estados WHERE sigla = "SP")),
    ('Niterói', 133.9, (SELECT id FROM estados WHERE sigla = "RJ")),
    ('Caruaru', 920.6, (SELECT id FROM estados WHERE sigla = "PE")),
    ('Juazeiro do Norte', 248.2, (SELECT id FROM estados WHERE sigla = "CE"));

SELECT * FROM cidades;