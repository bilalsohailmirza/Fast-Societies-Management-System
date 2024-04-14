import csv
import random
from faker import Faker

fake = Faker(locale = 'en_US')

def write_event_participant_file(EventIds):

    header = ['ParticipantId', 'ParticipantName', 'ParticipantPhone', 'ParticipantEmail']
    underscore = '_'

    with open('CompetitionPartcipant.csv', 'a', encoding='UTF8') as f:
        writer = csv.writer(f)
        count = 0
        for i in range(400):
            # for j in range()

            participant_id = fake.ssn()
            participant_name = fake.name()
            participant_phone = fake.phone_number()
            participant_email = fake.email()
            count= count + 1
            print(count, participant_id, participant_name, participant_phone, participant_email)
            
            data = [participant_id, participant_name, participant_phone, participant_email]
            writer.writerow(data)

            # write the header
        # writer.writerow(header)
            # write the data





SocietyId = ['Procom','Acm','Decs','Tlc','Cbs','Fdss','Mlsa']
Position = ['Cohead', 'Deputy', 'Coordinator', 'Member']
EventId = ['Procom-01','Acm-01','Acm-02','Decs-01','Decs-02','Tlc-01','Tlc-02','Cbs-01','Cbs-02','Fdss-01','Fdss-02','Mlsa-01'],
TeamId = ['PR', 'Content', 'Marketing', 'Promotion', 'EM', 'GR']


if __name__ == '__main__':

    write_event_participant_file(EventId)