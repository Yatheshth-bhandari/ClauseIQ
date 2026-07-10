import fitz


def extract_text(pdf):

    text = ""

    if isinstance(pdf, bytes):
        doc = fitz.open(stream=pdf, filetype="pdf")
    else:
        doc = fitz.open(pdf)

    for page in doc:
        text += page.get_text()

    doc.close()

    return text