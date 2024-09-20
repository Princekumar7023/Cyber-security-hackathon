function startSimulation(scenario) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    let message = '';

    switch (scenario) {
        case 'phishing':
            message = 'You received an email that looks suspicious. Click on the link to see what happens.';
            break;
        case 'sql-injection':
            message = 'Enter your username and password:';
            const input = prompt('Username: \nPassword:');
            message += ` You entered: ${input}. Always validate and sanitize input to prevent SQL injection.`;
            break;
        case 'xss':
            message = 'Enter some text that might contain scripts:';
            const xssInput = prompt('Input:');
            message += ` You entered: ${xssInput}. Be careful about untrusted content!`;
            break;
        default:
            message = 'Invalid scenario.';
    }

    resultDiv.innerHTML = message;
}
