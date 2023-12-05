-- This script was generated by the ERD tool in pgAdmin 4.
-- This script might have some issues and down in the script changes may occur
BEGIN;


CREATE TABLE IF NOT EXISTS public."TeamMember"
(
    "RollNumber" character varying NOT NULL,
    "Name" character varying NOT NULL,
    "Phone" character varying NOT NULL,
    "Cgpa" real,
    "Position" character varying NOT NULL,
    "MemberPhoto" character varying,
    PRIMARY KEY ("RollNumber")
);

CREATE TABLE IF NOT EXISTS public."Team"
(
    "TeamId" character varying,
    "SocietyId" character varying,
    "TeamName" character varying,
    PRIMARY KEY ("TeamId")
);

CREATE TABLE IF NOT EXISTS public."Society"
(
    "SocietyId" character varying,
    "SocietyName" character varying,
    "SocietyLogo" character varying,
    "SocietyDescription" text,
    PRIMARY KEY ("SocietyId")
);

CREATE TABLE IF NOT EXISTS public."Event"
(
    "EventId" character varying NOT NULL,
    "EventName" character varying NOT NULL,
    "SocietyId" character varying NOT NULL,
    "EventFee" integer,
    "EventDate" date,
    "EventLogo" character varying,
    "EventDescription" text,
    PRIMARY KEY ("EventId")
);

CREATE TABLE IF NOT EXISTS public."Competition"
(
    "CompetitionId" character varying NOT NULL,
    "EventId" character varying NOT NULL,
    "CompetitionName" character varying NOT NULL,
    "CompetitionFee" integer,
    "CompetitionDate" date NOT NULL,
    "CompetitionTime" time without time zone NOT NULL,
    "CompetitionLogo" character varying,
    "CompetitionDescription" text,
    PRIMARY KEY ("CompetitionId")
);

CREATE TABLE IF NOT EXISTS public."CompetitionParticipant"
(
    "ParticipantId" character varying NOT NULL,
    "ParticipantName" character varying NOT NULL,
    "ParticipantPhone" character varying NOT NULL,
    "ParticipantEmail" character varying NOT NULL,
    PRIMARY KEY ("ParticipantId")
);

CREATE TABLE IF NOT EXISTS public."EventAttendee"
(
    "AttendeeId" character varying NOT NULL,
    "AttendeeName" character varying NOT NULL,
    "AttendeePhone" character varying NOT NULL,
    "AttendeeEmail" character varying NOT NULL,
    PRIMARY KEY ("AttendeeId")
);

CREATE TABLE IF NOT EXISTS public."Event_EventAttendee"
(
    "Event_EventId" character varying,
    "EventAttendee_AttendeeId" character varying
);

CREATE TABLE IF NOT EXISTS public."TeamMember_Team"
(
    "TeamMember_RollNumber" character varying,
    "Team_TeamId" character varying
);

CREATE TABLE IF NOT EXISTS public."CompetitionParticipant_Competition"
(
    "CompetitionParticipant_ParticipantId" character varying,
    "Competition_CompetitionId" character varying
);

ALTER TABLE IF EXISTS public."Team"
    ADD FOREIGN KEY ("SocietyId")
    REFERENCES public."Society" ("SocietyId") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Event"
    ADD FOREIGN KEY ("SocietyId")
    REFERENCES public."Society" ("SocietyId") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

------
ALTER TABLE IF EXISTS public."Competition"
    ADD FOREIGN KEY ("EventId")
    REFERENCES public."Event" ("EventId") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Event_EventAttendee"
    ADD FOREIGN KEY ("Event_EventId")
    REFERENCES public."Event" ("EventId") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."Event_EventAttendee"
    ADD FOREIGN KEY ("EventAttendee_AttendeeId")
    REFERENCES public."EventAttendee" ("AttendeeId") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."TeamMember_Team"
    ADD FOREIGN KEY ("TeamMember_RollNumber")
    REFERENCES public."TeamMember" ("RollNumber") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."TeamMember_Team"
    ADD FOREIGN KEY ("Team_TeamId")
    REFERENCES public."Team" ("TeamId") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."CompetitionParticipant_Competition"
    ADD FOREIGN KEY ("CompetitionParticipant_ParticipantId")
    REFERENCES public."CompetitionParticipant" ("ParticipantId") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public."CompetitionParticipant_Competition"
    ADD FOREIGN KEY ("Competition_CompetitionId")
    REFERENCES public."Competition" ("CompetitionId") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;


-- From here onwards all the queries are for adjusting and undoing the errors that were being caused by the initial script that was generated from pgAdmin 4 in response of an ERD Diagram.

-- Dropping and Adding constraints to add the CASCADE property to the Foreign key constraints

BEGIN;
ALTER TABLE IF EXISTS public."Event"
DROP CONSTRAINT "Event_SocietyId_fkey";

ALTER TABLE IF EXISTS public."Event"
    ADD CONSTRAINT "Event_SocietyId_fkey" FOREIGN KEY ("SocietyId")
    REFERENCES public."Society" ("SocietyId") MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE
    NOT VALID;
COMMIT;


BEGIN;
ALTER TABLE IF EXISTS public."Team"
DROP CONSTRAINT "Team_SocietyId_fkey";

ALTER TABLE IF EXISTS public."Team"
ADD CONSTRAINT "Team_SocietyId_fkey" FOREIGN KEY ("SocietyId")
REFERENCES public."Society" ("SocietyId") MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE
    NOT VALID;
COMMIT;

BEGIN;
ALTER TABLE IF EXISTS public."Event_EventAttendee"
DROP CONSTRAINT "Event_EventAttendee_EventAttendee_AttendeeId_fkey";

ALTER TABLE IF EXISTS public."Event_EventAttendee"
ADD CONSTRAINT "Event_EventAttendee_EventAttendee_AttendeeId_fkey" FOREIGN KEY ("EventAttendee_AttendeeId")
REFERENCES public."EventAttendee" ("AttendeeId") MATCH SIMPLE
    ON UPDATE CASCADE
    ON DELETE CASCADE
    NOT VALID;
COMMIT;


ALTER TABLE "Event_EventAttendee"
ADD UNIQUE ("EventAttendee_AttendeeId", "Event_EventId")

ALTER TABLE "CompetitionParticipant_Competition"
ADD UNIQUE ("Competition_CompetitionId", "CompetitionParticipant_ParticipantId")

ALTER TABLE "TeamMember_Team"
ADD UNIQUE ("Team_TeamId", "TeamMember_RollNumber")

ALTER TABLE "EventAttendee"
add UNIQUE ("AttendeePhone", "AttendeeEmail")

ALTER TABLE "CompetitionParticipant"
add UNIQUE ("ParticipantPhone", "ParticipantEmail")

ALTER TABLE "TeamMember"
add UNIQUE ("Phone")

ALTER TABLE "Society"
add UNIQUE ("SocietyName")