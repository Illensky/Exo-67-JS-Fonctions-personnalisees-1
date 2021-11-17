function pTextChange (ID, text) {
    let p = document.getElementById(ID)
    p.innerText = text
}

pTextChange('p1', 'test')
pTextChange('p2', 'sets')
pTextChange('p3', 'tset')
pTextChange('p4', 'ests')
pTextChange('p5', 'stes')