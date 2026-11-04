import { Service } from '@angular/core';
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    updateDoc,
    doc,
    CollectionReference,
    DocumentData
} from 'firebase/firestore';
import { getApp } from 'firebase/app';

import { MissingPersonCase } from '../interfaces/interfaces';

@Service()
export class Firebase {
    private firestore = getFirestore(getApp());

    private casesCollection: CollectionReference<DocumentData> =
        collection(this.firestore, 'cases');

    async createCase(caseData: Omit<MissingPersonCase, 'id'>): Promise<string> {
        const document = await addDoc(this.casesCollection, caseData);
        return document.id;
    }

    async updateCase(caseId: string, updates: Partial<MissingPersonCase>): Promise<void> {
        const caseDocument = doc(this.firestore, 'cases', caseId);
        await updateDoc(caseDocument, updates);
    }

    async getCases(): Promise<MissingPersonCase[]> {
        const casesSnapshot = await getDocs(this.casesCollection);

        return casesSnapshot.docs.map(document => ({
            ...document.data(),
            id: document.id
        } as MissingPersonCase));
    }
}
