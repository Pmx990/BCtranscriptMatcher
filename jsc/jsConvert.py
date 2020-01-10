import json;
import requests;
import operator;

test = '{"classes":[{ "class":"CS100"},{ "class":"ENG100"}, { "class":"CS200"}, { "class":"CS300"}, { "class":"DMA100"}  ]}'    

req = '{"classes":[{ "class":"CS100"},{ "class":"CS200"},{ "class":"CS300"}, { "class":"CS400"}  ]}'

d1 = json.loads(test);
d2 = json.loads(req);

#print (d1['classes']);
d1_list = d1['classes']
d2_list = d2['classes']

#print(d1_list)


def same(d1_list,d2_list):
    sameList = [];
    for i in d1_list:
        for j in d2_list:
            if i==j:
                sameList.append(i);
    print(sameList)

def noInProgram(d1_list,d2_list):
    noInList = [];
    for i in d1_list:
       if ℹ not in d2_list:
            noInList.append(i);
    print(noInList)

def notTaken(d1_list,d2_list):
    notTakeList = [];
    for i in d2_list:
       if ℹ not in d1_list:
            notTakeList.append(i);
    print(notTakeList)
               
same(d1_list,d2_list);
noInProgram(d1_list,d2_list);
notTaken(d1_list,d2_list);
