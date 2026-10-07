// Safety keywords
const unsafePatterns = [
    "prescribe medicine",
    "give me prescription",
    "change my dosage",
    "increase my dosage",
    "decrease my dosage",
    "stop my medication",
    "diagnose me",
    "what medicine should i take",
    "which medicine should i take"
];

// Emergency symptoms
const emergencyPatterns = [
    "chest pain",
    "difficulty breathing",
    "can't breathe",
    "cannot breathe",
    "severe bleeding",
    "unconscious",
    "loss of consciousness",
    "seizure",
    "stroke",
    "heart attack"
];

export const safetyFilter = (prompt) => {
    const text = prompt.toLowerCase();

    return unsafePatterns.some(pattern =>
        text.includes(pattern)
    );
};

export const classifyUrgency = (prompt) => {
    const text = prompt.toLowerCase();

    if (
        emergencyPatterns.some(pattern =>
            text.includes(pattern)
        )
    ) {
        return "EMERGENCY";
    }

    return "GENERAL";
};