const fs = require('fs');

const content = fs.readFileSync('./index.md', {
    encoding: 'utf-8'
});

const newContent = content.replace('忽略信息', '');

fs.writeFileSync('./index.md', newContent);
