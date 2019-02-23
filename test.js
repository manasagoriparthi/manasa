QUnit.test("TestCircle",function(assert)
{
    var res=area(5);
    assert.equal(res, "78.5" ,"area of circle is  78.5");
});

QUnit.test("TestCircle",function(assert)
{
    var res=area(6);
    assert.equal(res, "113.03999999999999" ,"area of circle is  113.03999999999999");

});

QUnit.test("TestCircle",function(assert)
{
    var res=area(3);
    assert.equal(res, "28.259999999999998" ,"area of circle is  28.259999999999998");
});

QUnit.test("TestCircle",function(assert)
{
    var res=area(7);
    assert.equal(res, "153.86" ,"area of circle is  153.86");
});

QUnit.test ("TestCircle",function(assert)
{
    var res=area(8);
    assert.equal(res, "200.96" ,"area of circle is  200.96");
});
QUnit.test ("TestCircle",function(assert)
{
    var res=area(-m);
    assert.equal(res, "200.96" ,"area of circle is  200.96");
});
