var should = chai.should();

describe("测试add函数", function()
{
	it("1加1等于2", function()
    {
        var sum = add(1, 2);
        should.equal(sum, 3);
    });

    it("1加2等于3", function()
    {
        var sum = add(1, 2);
        should.equal(sum, 3);
    });
});