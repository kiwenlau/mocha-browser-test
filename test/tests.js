var should = chai.should();

it("1加2等于3", function()
{
    var sum = add(1, 2);
    should.equal(sum, 3);
});