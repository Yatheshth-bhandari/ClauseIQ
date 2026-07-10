from fastapi import APIRouter, UploadFile, File
from app.services.pdf_service import extract_text
from app.services.llm_service import compare_contracts

router = APIRouter()


@router.post("/compare")
async def compare(file1: UploadFile = File(...),
                  file2: UploadFile = File(...)):

    text1 = extract_text(await file1.read())

    text2 = extract_text(await file2.read())

    result = compare_contracts(text1, text2)

    return {
        "comparison": result
    }