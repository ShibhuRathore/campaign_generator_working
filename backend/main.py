import os, io, base64, logging, requests
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from PIL import Image
from dotenv import load_dotenv
import google.generativeai as genai
from huggingface_hub import InferenceClient
from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

# Setup Keys
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
hf_client = InferenceClient(token=os.getenv("HUGGINGFACE_API_TOKEN"))

# Constants
GOOGLE_TEXT_MODEL = "models/gemini-1.5-flash-latest"

# App
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class CampaignRequest(BaseModel):
    product_image_url: str
    product_name: str
    event_name: str
    location: str

@app.post("/generate-kit")
def generate_kit(payload: CampaignRequest):
    try:
        logging.info("Generating ad copy")
        model = genai.GenerativeModel(GOOGLE_TEXT_MODEL)
        ad_copy_prompt = f"You are a skilled marketing copywriter for Meesho. Write one short, exciting WhatsApp marketing message for a '{payload.product_name}'. The campaign is for {payload.event_name} in {payload.location}. Include an emoji. Output ONLY the message."
        response = model.generate_content(ad_copy_prompt)
        generated_ad_copy = response.text.strip()

        logging.info("Analyzing product image")
        response = requests.get(payload.product_image_url, headers={'User-Agent': 'Mozilla/5.0'})
        product_image = Image.open(io.BytesIO(response.content))
        vision_prompt = "Describe the clothing item in this image in a short phrase like 'red silk saree with gold border'."
        response = model.generate_content([vision_prompt, product_image])
        image_description = response.text.strip()

        logging.info("Generating model image")
        final_prompt = f"cinematic photo of a happy young indian woman wearing ({image_description}), celebrating {payload.event_name} in {payload.location}, festive background, sharp focus"
        image = hf_client.text_to_image(prompt=final_prompt, negative_prompt="blurry, watermark")
        buffer = io.BytesIO()
        image.save(buffer, format="JPEG")
        base64_image = base64.b64encode(buffer.getvalue()).decode('utf-8')
        image_url = f"data:image/jpeg;base64,{base64_image}"

        return {
            "generated_image_url": image_url,
            "generated_ad_copy": generated_ad_copy
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
