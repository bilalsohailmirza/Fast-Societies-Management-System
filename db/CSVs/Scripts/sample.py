#!/usr/bin/env python
# coding: utf-8

# In[3]:


import pandas as pd


# In[43]:


SocietyDic = {
    'SocietyId' : ['Procom','Acm','Decs','Tlc','Cbs','Fdss','Mlsa'],
    'SocietyName': ['Procom','Association Of Computing And Machinery','Dramatics Entertainment Cocurriculars Society','The Literary Club','Charachter Building Society','Fast Data Science Society','Microsoft Learn Student Association']
}

Team = {
    'TeamId' : [],
    'SocietyId': [],
    'TeamName' : []
}#to be generated using loops

EventDic = {
    'EventId': ['Procom-01','Acm-01','Acm-02','Decs-01','Decs-02','Tlc-01','Tlc-02','Cbs-01','Cbs-02','Fdss-01','Fdss-02','Mlsa-01'],
    'EventName': ['Procom','CodersCup','Dev Day','BeachPary','Spotlight','AHA Declamation','The Grand Debate','YouthClub talk','Orphans day out','DataQuest','DataVerse','HassanZahid Talk'],
    'SocietyId': ['Procom','Acm','Acm','Decs','Decs','Tlc','Tlc','Cbs','Cbs','Fdss','Fdss','Mlsa']
}

CompetitionDic = {
    'CompetitionId' : ['Procom-011','Procom-012','Procom-013','Procom-014','Acm-021','Acm-022','Acm-023','Acm-024','Fdss-011','Fdss-012'],
    'EventId' : ['Procom-01','Procom-01','Procom-01','Procom-01','Acm-02','Acm-02','Acm-02','Acm-02','Fdss-01','Fdss-01'],
    'CompetitionName' : ['Procom Speed Coding',' Procom Code in the dark','Procom Web Development competition','Procom MetaVerse','DevDay Speed Coding',' DevDay Code in the dark','DevDay Web Development competition','DevDay MetaVerse','DataQuest part 1','DataQuest part 2']
}


# In[44]:


tempList = SocietyDic['SocietyId']
tempList2 = ['Content','EM','PR','Marketing','GR','Media','Design']


# In[45]:


# for tname in tempList2:
#     for sid in tempList:
#         Team['TeamName'].append(tname)
#         Team['SocietyId'].append(sid)
#         Team['TeamId'].append(sid+"-"+tname)
        
        
#SocietyName-TeamName


# In[46]:


# SocietyDf = pd.DataFrame(SocietyDic)


# In[47]:


# TeamDf = pd.DataFrame(Team)


# In[48]:


# CompetitionsDf = pd.DataFrame(CompetitionDic)


# In[49]:


# EventsDf = pd.DataFrame(EventDic)


# In[51]:


#csvs khud banalena pls


# In[ ]:
from faker import Faker
import random
faker = Faker()
if __name__ == '__main__':
    for i in range (40):
        # print(faker.time('%H:'+ random.choice(['00', '30']) ) )
        print(type(faker.phone_number()))
    

