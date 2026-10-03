type Comment = {
    id: Number;
    text: String;
    otherComments: Comment[];
};

const userComments: Comment[] = [
    {
        id: 1,
        text: "Hello Word",
        otherComments: [],
    },
    {
        id: 2,
        text: "This is a new comment",
        otherComments: [
            {
                id: 3,
                text: "Inner Comment",
                otherComments: [
                    {
                        id: 4,
                        text: "Inner Inner Comment",
                        otherComments: [],
                    },
                    {
                        id: 6,
                        text: "Second Inner Inner Comment",
                        otherComments: [
                            {
                                id: 9,
                                text: "Tabbed thrice",
                                otherComments: [
                                    {
                                        id: 10,
                                        text: "Tabbed 4 Times",
                                        otherComments: [],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: 5,
                text: "Some other inner comment",
                otherComments: [],
            },
        ],
    },
    {
        id: 7,
        text: "Outer Comment 2",
        otherComments: [
            {
                id: 8,
                text: "Extra commenting",
                otherComments: [],
            },
        ],
    },
];

function printComment(
    comments: Comment[],
    noTabs: number = 0,
    maxIndent: number = 3,
) {
    const tabNumber: number = noTabs;

    comments.map((comment: Comment) => {
        // tabs
        let tabs = "";
        for (let i = 0; i < tabNumber; i++) {
            tabs += "\t";
        }
        // Printing Comments
        console.log(`${tabs}`, "Comment: ", comment.text);

        // Guard for max number of indent
        if (tabNumber === maxIndent) {
            return;
        }

        // recursive call to print inner comments
        if (comment.otherComments.length > 0) {
            // console.log(`TabNumber: ${tabNumber}, MaxIndent: ${maxIndent}`);
            printComment(comment.otherComments, tabNumber + 1, maxIndent);
        }
    });
}

printComment(userComments, 0, 2);
