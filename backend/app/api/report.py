from fastapi import APIRouter
from fastapi.responses import FileResponse
from reportlab.platypus import SimpleDocTemplate, Paragraph
from reportlab.lib.styles import getSampleStyleSheet

router = APIRouter()


@router.post("/report")
def generate_report(data: dict):

    filename = "AI_Report.pdf"

    doc = SimpleDocTemplate(filename)

    styles = getSampleStyleSheet()

    elements = []

    elements.append(Paragraph("<b>ClauseIQ AI Report</b>", styles["Heading1"]))

    elements.append(Paragraph(data["summary"], styles["BodyText"]))

    doc.build(elements)

    return FileResponse(
        filename,
        media_type="application/pdf",
        filename="ClauseIQ_Report.pdf"
    )