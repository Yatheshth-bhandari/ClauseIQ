import google.generativeai as genai
from app.config.settings import GEMINI_API_KEY

genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel("gemini-2.5-flash")


def summarize_contract(text):
    prompt = f"""
You are an expert contract lawyer.

Analyze this contract.

Return your answer in VALID MARKDOWN.

Use this format.

# Executive Summary

...

# Parties Involved

- Party A
- Party B

# Important Clauses

- Payment Terms
- Termination
- Confidentiality
- Liability

# Potential Risks

- ...

# Overall Risk

🟢 Low / 🟡 Medium / 🔴 High

Explain why.

# Final Recommendation

...

Contract:

{text}
"""

    response = model.generate_content(prompt)
    return response.text


def compare_contracts(contract1, contract2):
    prompt = f"""
You are an expert corporate lawyer.

Compare these two contracts carefully.

Return your response in VALID MARKDOWN.

Use exactly this structure.

# Executive Summary

A short summary.

# Added Clauses

- Clause 1
- Clause 2

# Removed Clauses

- Clause 1
- Clause 2

# Modified Clauses

- Clause 1
- What changed

# Risk Analysis

## Financial Risks

- ...

## Legal Risks

- ...

## Operational Risks

- ...

# Overall Risk

🟢 Low / 🟡 Medium / 🔴 High

Give one line explaining why.

# Recommendation

Give your recommendation.

Contract 1:

{contract1}

Contract 2:

{contract2}
"""
    response = model.generate_content(prompt)
    return response.text


def rag_answer(question, context):
    prompt = f"""
    You are an AI legal assistant.

    Answer ONLY using the provided context.

    If the answer is not available in the context, say:
    "The information is not available in the uploaded document."

    Context:
    {context}

    Question:
    {question}
    """

    response = model.generate_content(prompt)
    return response.text