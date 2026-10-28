import { Service } from '@angular/core';
import { GoogleGenAI } from '@google/genai';
import { environment } from '../../environments/environment';

@Service()
export class Gemini {
    private genAI = new GoogleGenAI({ apiKey: environment.geminiAPI.apiKey });

    async processCase (prompt: string): Promise<string> {
        const response = await this.genAI.models.generateContent({
            model: 'gemini-3.5-flash-lite',
            contents: prompt
        });
        return response.text ?? '';
    }
}
