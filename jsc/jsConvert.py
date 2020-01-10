import json;
import requests;
import operator;

#Hardcoded Json Strings 
test = '{"classes":[{ "class":"CS100"},{ "class":"ENG100"}, { "class":"CS200"}, { "class":"CS300"}, { "class":"DMA100"}  ]}'    
req = '{"classes":[{ "class":"CS100"},{ "class":"CS200"},{ "class":"CS300"}, { "class":"CS400"}  ]}'

#Get dict from Json
d1 = json.loads(test);
d2 = json.loads(req);


#Get list from dict
d1_list = d1['classes']
d2_list = d2['classes']


#This three methods are recieving List type

#Classes that are taken and in the program
def same(d1_list,d2_list):
    sameList = [];
    for i in d1_list:
        for j in d2_list:
            if i==j:
                sameList.append(i);
    print(sameList)

#Classes that are taken but not required by the program
def noInProgram(d1_list,d2_list):
    noInList = [];
    for i in d1_list:
       if ℹ not in d2_list:
            noInList.append(i);
    print(noInList)

#Classes that are required by the program but not yet taken
def notTaken(d1_list,d2_list):
    notTakeList = [];
    for i in d2_list:
       if ℹ not in d1_list:
            notTakeList.append(i);
    print(notTakeList)
               
same(d1_list,d2_list);
noInProgram(d1_list,d2_list);
notTaken(d1_list,d2_list);
