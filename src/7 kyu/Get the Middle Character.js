function getMiddle(s)
{
    var char = Math.floor(s.length/2);
    if (s.length % 2 == 0)
        return s[char-1] + s[char];
    else
        return s[char];
}
