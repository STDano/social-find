import { Service } from '@angular/core';
import { GoogleGenAI } from '@google/genai';
import { environment } from '../../environments/environment';

@Service()
export class Gemini {
    private genAI = new GoogleGenAI({ apiKey: environment.geminiAPI.apiKey });

    async processDate (data:any, prompt: string) {
        const fullPrompt = `${prompt} Use this date: ${JSON.stringify(data, null, 2)}`;

        const response = await this.genAI.models.generateContent({
            model: 'gemini-2.5',
            contents:fullPrompt
        });

        return response.text;
    }
}
