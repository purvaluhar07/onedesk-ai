export type AIResponse =
  | {
      type: "email";
      subject: string;
      body: string;
    }
  | {
      type: "schedule";
      title: string;
      items: {
        time: string;
        task: string;
      }[];
    }
  | {
      type: "research";
      title: string;
      overview: string;
      keyPoints: string[];
      conclusion: string;
    }
  | {
      type: "document";
      title: string;
      summary: string;
      keyPoints: string[];
      actionItems: string[];
    }
  | {
      type: "general";
      text: string;
    };