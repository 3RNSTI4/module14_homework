const parser = new DOMParser();
const xmlString = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.documentElement;
const studentNode = listNode.querySelectorAll;
for(var i =0; i< studentNode.length; i++) {
       var child = studentNode[i];
       
       if(studentNode.nodeType == Node.ELEMENT_NODE)  {
         const nameNode = studentNode.getElementsByTagName("name");
         const nameFirst = studentNode.getElementsByTagName("first");
         const nameSecond = studentNode.getElementsByTagName("second");
         const ageNode = studentNode.getElementsByTagName("age");
         const profNode = studentNode.getElementsByTagName("prof");
         const nameAttr = nameNode.getAttribute("lang");
         const result = {
        first: nameFirst,
        second: nameSecond,   
        age: ageNode,
        prof: profNode,
        lang: nameAttr,
        }
         console.log(result)
       }};