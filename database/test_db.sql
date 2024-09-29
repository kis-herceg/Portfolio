CREATE DATABASE IF NOT EXISTS portfolio
    CHARACTER SET utf8mb4
    COLLATE utf8mb4_hungarian_ci;

USE portfolio;


GRANT ALL PRIVILEGES ON portfolio.* TO 'user'@'%';
FLUSH PRIVILEGES;


CREATE TABLE tech_card (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    icon VARCHAR(50) NOT NULL
);


CREATE TABLE projects (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    img VARCHAR(50) NOT NULL,
    github VARCHAR(100) NOT NULL,
    description TEXT
);


CREATE TABLE project_tags (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    project_id INT NOT NULL,
    tech_card_id INT NOT NULL
);


INSERT INTO tech_card (name, icon) VALUES 
('React', 'FaReact'),
('JavaScript', 'SiJavascript'),
('TypeScript', 'SiTypescript'), 
('.NET', 'SiDotnet'),
('Python', 'FaPython'),
('HTML5', 'FaHtml5'),
('CSS3', 'FaCss3Alt'),
('Bootstrap', 'FaBootstrap'),
('Tailwind CSS', 'SiTailwindcss'),
('WordPress', 'FaWordpress'),
('Docker', 'FaDocker'),
('Java', 'FaJava'),
('MySql', 'SiMysql');


INSERT INTO projects (name, img, github, description) VALUES 
('Portfolio', 'portfolio.png','https://github.com/kis-herceg/Portfolio', 'Portfolio description'),
('.Net Login System', 'neon3.jpg','https://github.com/kis-herceg/Portfolio', 'Portfolio description'),
('React Anime Website', 'anime.png','https://github.com/kis-herceg/react-test', 'Portfolio description'),
('.Net WPF Aknakereső', 'aknakereso.png','https://github.com/kis-herceg/Aknakereso', 'Portfolio description'),
('.Net WPF Tetrisz', 'tetris.jpg','https://github.com/kis-herceg/Tetrisz', 'Portfolio description'),
('Java Login System', 'neon3.jpg','https://github.com/kis-herceg/Portfolio', 'Portfolio description');


INSERT INTO project_tags (project_id, tech_card_id) VALUES 
(1, 1), (1, 3), (1, 9), (1, 11), (1, 12), (1, 13),
(2, 4), (2, 11), (2, 13),
(3, 1), (3, 11),
(4, 4), (4, 11),
(5, 4), (5, 11),
(6, 12), (6, 13), (6, 11);
