Build #{{build.number}} `k3env/landing-cv` finished

Message: `{{commit.message}}`

Author: {{commit.author}} [{{commit.email}}](mailto:{{commit.email}})

{{#success build.status}}
🟢 build succeeded
{{else}}
🔴 build failed
{{/success}}

Detailed build info [here]({{build.link}})
