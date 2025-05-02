## 🚀 Deploying a Static Website to Amazon S3 with GitHub Actions
This guide explains how to deploy a static website from a GitHub repository to an S3 bucket using GitHub Actions.

## 🛠️ Prerequisites

- An AWS account.

- An S3 bucket (e.g., s3-with-github-action).

- AWS IAM User with programmatic access and full S3 permissions.

- GitHub repository with a static site.

 ## 📸 Step 1: Create and Configure the S3 Bucket
Go to S3 Console

- Create bucket: s3-with-github-action

- Disable “Block all public access”

- Enable static website hosting under Properties

- Index document: index.html

- Optional: Error document: 404.html

📸 Screenshot 1: Bucket creation with permissions

  ![Screenshot 2025-05-01 160044](https://github.com/user-attachments/assets/5f493354-bd35-447b-a6c5-1dda97b58e80)

📸 Screenshot 2: Static website hosting settings

![Screenshot 2025-05-01 155926](https://github.com/user-attachments/assets/469fd8b0-aa4c-4b66-a5bb-d6e68715bd40)


## 🔐 Step 2: Set Up GitHub Secrets
Go to your GitHub repository:

- Settings > Secrets and variables > Actions

- AWS_ACCESS_KEY_ID

- AWS_SECRET_ACCESS_KEY

📸 Screenshot 3: GitHub secrets screen

![Screenshot 2025-05-01 160402](https://github.com/user-attachments/assets/b89a06e2-eb03-4d85-92b8-a2b810b1346a)


## 🤖 Step 3: Add GitHub Actions Workflow
Create this file at .github/workflows/deploy.yml:
```yaml

name: Deploy to S3

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repo
        uses: actions/checkout@v3

      - name: Configure AWS credentials
        uses: aws-actions/configure-aws-credentials@v2
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1

      - name: Deploy to S3
        run: aws s3 sync ./Project-1 s3://s3-with-github-action --delete
```
📸 Screenshot 4: GitHub Actions workflow file in code editor

![Screenshot 2025-05-02 085859](https://github.com/user-attachments/assets/7f840225-34aa-4516-907b-bcbfc6c8248e)

![image](https://github.com/user-attachments/assets/ffa547f0-7c3c-4366-9ddf-5730ca948f75)


## 🌍 Step 6: Access Your Website
Visit:
👉 https://s3-with-github-action.s3.us-east-1.amazonaws.com/index.html

📸 Screenshot 7: Live website in browser

![Screenshot 2025-05-01 160847](https://github.com/user-attachments/assets/001f67b9-da06-4422-bc34-81138d4a7679)


