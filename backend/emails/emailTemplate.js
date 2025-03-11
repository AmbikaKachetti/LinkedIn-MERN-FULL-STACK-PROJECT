
// Welcome message
export const createWelcomeEmailTemplate = (name, profileUrl) => {
    return `
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
                }
                .header {
                    background-color: #0073b1;
                    color: white;
                    padding: 10px;
                    text-align: center;
                    font-size: 24px;
                }
                .content {
                    padding: 20px;
                    text-align: center;
                }
                .profile-link {
                    display: inline-block;
                    margin-top: 20px;
                    padding: 10px 20px;
                    background-color: #0073b1;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                }
                .footer {
                    margin-top: 20px;
                    font-size: 12px;
                    color: #555;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">Welcome to My OWN LinkedIn</div>
                <div class="content">
                    <p>Hi <strong>${name}</strong>,</p>
                    <p>We are thrilled to have you on board! Start building your professional profile and networking with like-minded individuals.</p>
                    <a href="${profileUrl}" class="profile-link">Visit Your Profile</a>
                </div>
                <div class="footer">
                    <p>&copy; 2025 My OWN LinkedIn. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
    `;
};                                  

// connection request accepted
export const createConnectionAcceptedEmailTemplate = (senderName, recipientName, profileUrl) => {
    return `
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
                }
                .header {
                    background-color: #0073b1;
                    color: white;
                    padding: 10px;
                    text-align: center;
                    font-size: 24px;
                }
                .content {
                    padding: 20px;
                    text-align: center;
                }
                .profile-link {
                    display: inline-block;
                    margin-top: 20px;
                    padding: 10px 20px;
                    background-color: #0073b1;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                }
                .footer {
                    margin-top: 20px;
                    font-size: 12px;
                    color: #555;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">Connection Request Accepted!</div>
                <div class="content">
                    <p>Hi <strong>${recipientName}</strong>,</p>
                    <p><strong>${senderName}</strong> has accepted your connection request! Start engaging with your new connection and grow your professional network.</p>
                    <a href="${profileUrl}" class="profile-link">View Profile</a>
                </div>
                <div class="footer">
                    <p>&copy; 2025 My OWN LinkedIn. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
    `;
};

// someone posted a comment under your post
export const createCommentNotificationEmailTemplate = (recipient, commenterName, postUrl, commentContent) => {
    return `
        <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                }
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
                }
                .header {
                    background-color: #0073b1;
                    color: white;
                    padding: 10px;
                    text-align: center;
                    font-size: 24px;
                }
                .content {
                    padding: 20px;
                    text-align: center;
                }
                .comment-box {
                    background-color: #f3f3f3;
                    padding: 15px;
                    border-radius: 5px;
                    font-style: italic;
                    margin-top: 10px;
                }
                .post-link {
                    display: inline-block;
                    margin-top: 20px;
                    padding: 10px 20px;
                    background-color: #0073b1;
                    color: white;
                    text-decoration: none;
                    border-radius: 5px;
                }
                .footer {
                    margin-top: 20px;
                    font-size: 12px;
                    color: #555;
                    text-align: center;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">New Comment on Your Post!</div>
                <div class="content">
                    <p>Hi <strong>${recipient}</strong>,</p>
                    <p><strong>${commenterName}</strong> has commented on your post:</p>
                    <div class="comment-box">${commentContent}</div>
                    <p>Click below to view and engage with the comment.</p>
                    <a href="${postUrl}" class="post-link">View Comment</a>
                </div>
                <div class="footer">
                    <p>&copy; 2025 My OWN LinkedIn. All rights reserved.</p>
                </div>
            </div>
        </body>
        </html>
    `;
};


