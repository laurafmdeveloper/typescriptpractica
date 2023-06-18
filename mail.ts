

export enum MailTypeList {personal= "personal", education = "education", work= "work", other="other"};



export class Mail {
    private mailType: MailTypeList; 
    private direction: String; 



    constructor(mailType: MailTypeList,  direction: String) {

        this.mailType = mailType;
        this.direction = direction;
    }


    // Methods
    // GETTERS AND SETTERS

    public get getMailType(): MailTypeList {
        return this.mailType;
    }
    public set setMailType(value: MailTypeList) {
        this.mailType = value;
    }



    public get getDirection(): String {
        return this.direction;
    }
    public set setDirection(newDirection: String) {
        this.direction = newDirection;
    }

    // OTHER METHODS

    // PRINT ALL INFO (to String)
    public getAllInfo(): String {
        return "Mail type: " + this.getMailType + " - Direction: " + this.getDirection + "\n";
    }


}
