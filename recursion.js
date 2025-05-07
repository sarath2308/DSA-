function a(n)
{
    if(n<=1)
    {
        return;
    }
    a(n-1)
    console.log(n)
    a(n-1)
}
a(5)