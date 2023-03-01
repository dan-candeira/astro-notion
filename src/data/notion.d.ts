export interface NotionDBProperty {
    [key: string]: {
        title?: Array<any>
    }
} 

export interface Database {
    properties: NotionDBProperty,
}