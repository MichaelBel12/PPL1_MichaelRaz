import * as R from "ramda";

const stringToArray = R.split("");

/* Question 2.1 */
const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
export const countVowels: (s: string) => number = ((s:string)=>{
    const sLower=s.toLowerCase();
    const charArr:string[]=stringToArray(sLower);
    const vowelArr=charArr.filter(cur=>vowels.indexOf(cur)>=0)
    return vowelArr.length;
});
 

/* Question 2.2 */
export const isPalindrome = (text: string): boolean => {
    const alphabet: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const lowerText = text.toLowerCase();
    const lowerTextArray = stringToArray(lowerText); 
    const letterArray = lowerTextArray.filter((cur: string) => alphabet.indexOf(cur) >= 0);
    const bool = letterArray.reduce((acc: boolean, cur: string, i: number) => {
        return acc && (cur === letterArray[letterArray.length - 1 - i]);
    }, true);
    return bool;
} ;
  

/* Question 2.3 */
export type WordTree = {
    root: string;
    children: WordTree[];
}

export const treeToSentence = (t: WordTree): string => {
    const root = t.root;
    const childrenPart = t.children.reduce((acc, cur) => {
        const childSentence = treeToSentence(cur);
        return childSentence !== "" ? acc + " " + childSentence : acc;}, "");
    return (root + childrenPart).trim();
};


