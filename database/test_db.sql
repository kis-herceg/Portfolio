CREATE DATABASE portfolio;
USE portfolio;

GRANT ALL PRIVILEGES ON portfolio.* TO 'user'@'%';
FLUSH PRIVILEGES;

CREATE TABLE tech_card (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    icon VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO tech_card (name, icon) VALUES ("React", "FaReact");
INSERT INTO tech_card (name, icon) VALUES ("JavaScript", "SiJavascript");
INSERT INTO tech_card (name, icon) VALUES ("TypeScript", "SiTypescript");
INSERT INTO tech_card (name, icon) VALUES (".NET", "SiDotnet");
INSERT INTO tech_card (name, icon) VALUES ("Python", "FaPython");
INSERT INTO tech_card (name, icon) VALUES ("Html5", "FaHtml5");
INSERT INTO tech_card (name, icon) VALUES ("CSS3", "FaCss3Alt");
INSERT INTO tech_card (name, icon) VALUES ("Bootstrap", "FaBootstrap");
INSERT INTO tech_card (name, icon) VALUES ("Tailwind CSS", "SiTailwindcss");
INSERT INTO tech_card (name, icon) VALUES ("Wordpress", "FaWordpress");
INSERT INTO tech_card (name, icon) VALUES ("Docker", "FaDocker");
INSERT INTO tech_card (name, icon) VALUES ("Java", "FaJava");
