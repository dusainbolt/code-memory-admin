export enum ExperienceStatus {
    HIDE = "HIDE",
    ACTIVE ="ACTIVE"
}

export interface CreateExpInput {
    nameVN: string;
    nameEN: string;
    type: string;
    position: string;
    descriptionVN: string;
    descriptionEN: string;
    startTime: string;
    endTime: string;
    status: string;
    thumbnail?: string;
}