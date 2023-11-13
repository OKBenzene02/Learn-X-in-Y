export const query = (content)=> {
    return({
    "model": "gpt-3.5-turbo",
    "messages": [{"role": "user", "content": `Create me a detailed plan for learning any programming language. create it day wise. ${content} language, Always mention the programming language and study guide after the programming language with a sepeartor ":-:"(sepearator should be none other than ":-:") between each of them(like: programmingLanguage:-:studyGuide:-:plan:-:schedule). A study guide should be always followed by programming language name followed by its detailed guide followed by its plan followed by its schedule`}]
    });
  }