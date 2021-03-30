export interface Country {
    ID: number;
    Name: string;
    PinYin: string;
    Image: string;
    UrlFragment: string
    IsValid: boolean;
    VisibleToPublic: boolean;
    Population: number;
    PopulationDisplay: string;
    SEOFriendlyName: string; 
}