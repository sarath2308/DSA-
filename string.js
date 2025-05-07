function reverse(str)
{
    let stack=[];
    let result='';
  for(let char of str)
  {
    stack.push(char)
  }
  while(stack.length>0)
  {
  result+=stack.pop()
  }
  return result;
}
let reversed=reverse('hello world')
console.log(reversed);
