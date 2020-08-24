function generateREADME(data) {
    const fs = require("fs");
    let filename = "README.md";
    fs.writeFile(
        filename,
`# ${data.title}\n\n
[![Github Badge](https://img.shields.io/badge/GitHub-Profile-blueviolet?style=plastic&logo=appveyor)](${data.profile})\n\n
## Table of Contents\n\n
[Description](#Description)\n
[Installation](#Installation)\n
[Usage](#Usage)\n
[Licenses](#Licenses)\n
[Contributors](#Contributors)\n
[Tests](#Tests)\n
## Description\n
${data.description}\n\n
## Installation\n
${data.installation}\n\n
## Usage\n
${data.usage}\n\n
## Licenses\n
${data.license}\n\n
## Contributors\n
${data.contributors}\n\n
## Tests\n
${data.tests}\n\n
## Questions\n
${data.questions}
`,
        function (err) {
            if (err) {
                return console.log(err)
            }
            else {
                console.log("Huzzah! Your README.md has been generated!")
            }
        }
    );
}

module.exports = generateREADME;