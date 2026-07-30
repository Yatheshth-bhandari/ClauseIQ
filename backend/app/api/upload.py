from fastapi import APIRouter, UploadFile, File
import os
import shutil

from app.services.pdf_service import extract_text
from app.services.llm_service import summarize_contract
from app.services.vector_store import store_document

router = APIRouter()

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.post("/upload")
async def upload_pdf(file: UploadFile = File(...)):

    if not file.filename.lower().endswith(".pdf"):
        return {"error": "Only PDF files are allowed."}

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)

    # Save PDF
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Extract text from PDF
    text = extract_text(file_path)

    # Store document in vector database
    store_document(file.filename, text)

    # Generate summary
    summary = summarize_contract(text)

    return {
        "document_id": file.filename,
        "summary": summary
    }