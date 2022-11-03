SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;


CREATE TABLE public.teams (
    "_id" serial NOT NULL,
    "name" varchar NOT NULL
);

CREATE TABLE public.games (
    "_id" serial NOT NULL,
    "home_team_id" varchar NOT NULL,
    "away_team_id" varchar NOT NULL,
    "week" varchar NOT NULL,
    "winning_team_id" varchar NOT NULL,
    "tie" boolean NOT NULL,
    "home_score" varchar DEFAULT '-1',
    "away_score" varchar DEFAULT '-1'
);


INSERT INTO public.teams VALUES(1, 'ATL');
INSERT INTO public.teams VALUES(2, 'BUF');
INSERT INTO public.teams VALUES(3, 'CHI');
INSERT INTO public.teams VALUES(4, 'CIN');
INSERT INTO public.teams VALUES(5, 'CLE');
INSERT INTO public.teams VALUES(6, 'DAL');
INSERT INTO public.teams VALUES(7, 'DEN');
INSERT INTO public.teams VALUES(8, 'DET');
INSERT INTO public.teams VALUES(9, 'GB');
INSERT INTO public.teams VALUES(10, 'TEN');
INSERT INTO public.teams VALUES(11, 'IND');
INSERT INTO public.teams VALUES(12, 'KC');
INSERT INTO public.teams VALUES(13, 'LV');
INSERT INTO public.teams VALUES(14, 'LAR');
INSERT INTO public.teams VALUES(15, 'MIA');
INSERT INTO public.teams VALUES(16, 'MIN');
INSERT INTO public.teams VALUES(17, 'NE');
INSERT INTO public.teams VALUES(18, 'NO');
INSERT INTO public.teams VALUES(19, 'NYG');
INSERT INTO public.teams VALUES(20, 'NYJ');
INSERT INTO public.teams VALUES(21, 'PHI');
INSERT INTO public.teams VALUES(22, 'ARI');
INSERT INTO public.teams VALUES(23, 'PIT');
INSERT INTO public.teams VALUES(24, 'LAC');
INSERT INTO public.teams VALUES(25, 'SF');
INSERT INTO public.teams VALUES(26, 'SEA');
INSERT INTO public.teams VALUES(27, 'TB');
INSERT INTO public.teams VALUES(28, 'WSH');
INSERT INTO public.teams VALUES(29, 'CAR');
INSERT INTO public.teams VALUES(30, 'JAX');
INSERT INTO public.teams VALUES(31, 'NA');
INSERT INTO public.teams VALUES(32, 'NA');
INSERT INTO public.teams VALUES(33, 'BAL'); 
INSERT INTO public.teams VALUES(34, 'HOU');

