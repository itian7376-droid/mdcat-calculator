document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculator-form');
    const resultsDiv = document.getElementById('results');
    const errorDiv = document.getElementById('error');
    const matricPercentValue = document.getElementById('matric-percent-value');
    const fscPercentValue = document.getElementById('fsc-percent-value');
    const mdcatPercentValue = document.getElementById('mdcat-percent-value');
    const aggregateValue = document.getElementById('aggregate-value');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get input values
        const matricObtained = parseFloat(document.getElementById('matric-obtained').value);
        const fscObtained = parseFloat(document.getElementById('fsc-obtained').value);
        const mdcatScore = parseFloat(document.getElementById('mdcat-score').value);

        // Validation
        if (isNaN(matricObtained) || matricObtained < 0 || matricObtained > 1100) {
            showError('Matric obtained marks must be between 0 and 1100.');
            return;
        }
        if (isNaN(fscObtained) || fscObtained < 0 || fscObtained > 1100) {
            showError('FSC obtained marks must be between 0 and 1100.');
            return;
        }
        if (isNaN(mdcatScore) || mdcatScore < 0 || mdcatScore > 180) {
            showError('MDCAT score must be between 0 and 180.');
            return;
        }

        // Calculate percentages
        const matricPercent = (matricObtained / 1100) * 100;
        const fscPercent = (fscObtained / 1100) * 100;
        const mdcatPercent = (mdcatScore / 180) * 100;

        // Calculate aggregate
        const aggregate = (matricPercent * 0.1) + (fscPercent * 0.4) + (mdcatPercent * 0.5);

        // Display results
        matricPercentValue.textContent = matricPercent.toFixed(2);
        fscPercentValue.textContent = fscPercent.toFixed(2);
        mdcatPercentValue.textContent = mdcatPercent.toFixed(2);
        aggregateValue.textContent = aggregate.toFixed(2);

        resultsDiv.classList.remove('hidden');
        errorDiv.classList.add('hidden');
    });

    function showError(message) {
        errorDiv.textContent = message;
        errorDiv.classList.remove('hidden');
        resultsDiv.classList.add('hidden');
    }
});
