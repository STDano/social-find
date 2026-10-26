import { Service } from '@angular/core';
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
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

    async createCase(caseData: MissingPersonCase): Promise<void> {
        try {
            await addDoc(this.casesCollection, caseData);
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    }

    async getCases(): Promise<MissingPersonCase[]> {
        const casesSnapshot = await getDocs(this.casesCollection);

        return casesSnapshot.docs.map(document => ({
            ...document.data(),
            id: document.id
        } as MissingPersonCase));
    }
}