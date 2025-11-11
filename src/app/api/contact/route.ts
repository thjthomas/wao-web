import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxNAWPBFoMVyStmDMy_vdzeOgUJJXE8dqjPN3Yp40n2XLI_ABR1z_IPhWQepzWa0hB4/exec",
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-Type": "application/json" },
      }
    )

    // Google Apps Script may return text or JSON
    let data
    const contentType = response.headers.get("content-type")
    if (contentType && contentType.includes("application/json")) {
      data = await response.json()
    } else {
      const text = await response.text()
      data = { message: text || "Success" }
    }

    return NextResponse.json(data, { status: response.status })
  } catch (error) {
    console.error("Error submitting form:", error)
    return NextResponse.json(
      { message: "Error submitting form", error: String(error) },
      { status: 500 }
    )
  }
}

