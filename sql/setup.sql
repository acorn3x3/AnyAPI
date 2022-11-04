-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS champions;

CREATE TABLE champions (
    id BIGINT GENERATED ALWAYS AS IDENTITY, 
    name VARCHAR NOT NULL,
    title VARCHAR NOT NULL,
    quote VARCHAR NOT NULL
);

INSERT INTO champions (name, title, quote)
VALUES
('Akshan','The Rogue Sentinel', 'Fixing the world, one scoundrel at a time'),
('BelVeth','The Empress of the Void', 'I am the voice of the silence'),
( 'Catilyn','The Sheriff of Piltover','Im on the case'),
( 'Cassiopea', 'The Serpents Embrace', 'There is no antidote for me'),
( 'Garen','Vanguard of Demacia' ,'For Demacia!'),
( 'Leona', 'Aspect of the Solari', 'The Sun will never set'),
( 'Lee Sin','Monk of Ionia','Your will. My hands'),
( 'Poppy', 'Hero of Legend', 'Im no hero, just a yordle with a hammer'),
( 'Shen' ,'Eye of Twilight','Youre already dead, you just havent caught up yet'),
( 'Skarner', 'The Last Brackern','Feel my sting!'),
( 'Taric' ,'Shield of Valoran','Whatchu know bout gems'),
( 'Viego','King of Camavor','Where is she?!');


