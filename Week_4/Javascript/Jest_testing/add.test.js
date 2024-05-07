const add=require('./add');

test('adds 100+200 to equal 300',()=>{
    expect(add(100,200)).toBe(300);
})

test('adds -100 + 300 to equal 200',() =>{
    expect(add(-100,300)).not.toBe(400);
})

test('adds 0 +0 to equal 0',()=>{
    expect(add(0,0)).toBe(0);
})